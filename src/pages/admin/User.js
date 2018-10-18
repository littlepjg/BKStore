import React, { Component } from 'react';
import UserSearch from '../../components/admin/user/UserSearch';
import UserInfoTable from '../../components/admin/user/UserInfoTable';
import Pagination from '../../components/pagination/Pagination';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
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
                        fetch(`/admin/user/delete/`, {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json; charset=utf-8"
                            },
                            body: JSON.stringify({ id }),
                        }).then(
                            res => res.json()
                        ).then(
                            json => {
                                console.log(json);
                                const { success, error } = json;
                                if (success && !error) {
                                    let maxCurrentPage = currentPage * noPerPage;
                                    let totalAfterDel = totalUser - 1;
                                    if (maxCurrentPage <= totalAfterDel || (maxCurrentPage > totalAfterDel && totalAfterDel - (currentPage - 1) * noPerPage > 0)) {
                                        this.getUserByPage(currentPage, searchValue);
                                    } else {
                                        this.getUserByPage(currentPage - 1, searchValue);
                                    }
                                }
                            }
                        );
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
        fetch(api).then(
            res => res.json()
        ).then(
            json => {
                const { success, error, totalUser, users } = json;
                if (success && !error) {
                    this.setState({ totalUser, currentPage: page, users });
                } else {
                    console.log(error);
                    this.setState({ error });
                }
            }
        );
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
            <div>
                <UserSearch totalUser={totalUser} searchValue={searchValue}
                    handleChangeSearch={this.handleChangeSearch} getUserByEmail={this.getUserByEmail} />
                <UserInfoTable users={users} currentPage={currentPage} noPerPage={noPerPage} deleteUser={this.deleteUser} />
                <Pagination currentPage={currentPage} total={totalUser} noPerPage={noPerPage}
                    getPrevPage={this.getPrevPage} getNextPage={this.getNextPage} />
                {error && <MessageDialog title={"Message"} error={error} resetError={this.resetError} />}
            </div>
        );
    }
}

export default User;