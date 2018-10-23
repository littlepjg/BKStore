import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import axios from 'axios';

import 'react-confirm-alert/src/react-confirm-alert.css';

import { WhitePanel } from '../../theme/Style';
import UserSearch from '../../components/admin/user/UserSearch';
import UserInfoTable from '../../components/admin/user/UserInfoTable';
import Pagination from '../../components/pagination/Pagination';
import MessageDialog from '../../components/dialog/MessageDialog';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalUser: 0,
            currentPage: 1,
            noPerPage: 10,
            users: [],
            searchValue: '',
            error: '',
        };
        this.getPrevPage = this.getPrevPage.bind(this);
        this.getNextPage = this.getNextPage.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.getUserByEmail = this.getUserByEmail.bind(this);
        this.resetError = this.resetError.bind(this);
    }

    getNextPage() {
        const { currentPage, searchValue } = this.state;
        this.getUserByPage(currentPage + 1, searchValue);
    }

    getPrevPage() {
        const { currentPage, searchValue } = this.state;
        this.getUserByPage(currentPage - 1, searchValue);
    }

    deleteUser(id) {
        const { currentPage, noPerPage, totalUser, searchValue } = this.state;
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete this user.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios.post(`/admin/user/delete`, { id }).then(
                            response => {
                                const { success, error } = response.data;
                                if (success) {
                                    let maxCurrentPage = currentPage * noPerPage;
                                    let totalAfterDel = totalUser - 1;
                                    if (maxCurrentPage <= totalAfterDel || (maxCurrentPage > totalAfterDel && totalAfterDel - (currentPage - 1) * noPerPage > 0)) {
                                        this.getUserByPage(currentPage, searchValue);
                                    } else {
                                        this.getUserByPage(currentPage - 1, searchValue);
                                    }
                                }
                            }
                        )
                    }
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    handleChangeSearch(searchValue) {
        this.setState({ searchValue });
    }

    getUserByEmail() {
        const { searchValue } = this.state;
        this.getUserByPage(1, searchValue);
    }

    getUserByPage(page, searchValue) {
        let api = searchValue ? `/admin/user/pages/${page}/${searchValue}` : `/admin/user/pages/${page}`;
        axios.get(api).then(response => {
            console.log(response);
            const { success, error } = response.data;
            if (success) {
                const { totalUser, users } = response.data;
                this.setState({ totalUser, currentPage: page, users });
            } else {
                this.setState({ error });
            }
        }).catch(error => {
            console.log(error);
        });
    }

    resetError() {
        this.setState({ error: '' });
    }

    componentDidMount() {
        const { currentPage, searchValue } = this.state;
        this.getUserByPage(currentPage, searchValue);
    }

    render() {
        const { totalUser, currentPage, noPerPage, users, searchValue, error } = this.state;
        return (
            <WhitePanel>
                <UserSearch totalUser={totalUser} searchValue={searchValue}
                    handleChangeSearch={this.handleChangeSearch} getUserByEmail={this.getUserByEmail} />
                <UserInfoTable users={users} currentPage={currentPage} noPerPage={noPerPage} deleteUser={this.deleteUser} />
                <Pagination currentPage={currentPage} total={totalUser} noPerPage={noPerPage}
                    getPrevPage={this.getPrevPage} getNextPage={this.getNextPage} />
                {error && <MessageDialog title={"Message"} message={error} resetMessage={this.resetError} />}
            </WhitePanel>
        );
    }
}

export default User;