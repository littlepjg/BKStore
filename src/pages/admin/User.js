import React, { Component } from 'react';
import UserSearch from '../../components/admin/user/UserSearch';
import UserInfoTable from '../../components/admin/user/UserInfoTable';
import Pagination from '../../components/pagination/Pagination';
import './user.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalUser: 0,
            currentPage: 1,
            noPerPage: 10,
            users: []
        };
        this.getPrevPage = this.getPrevPage.bind(this);
        this.getNextPage = this.getNextPage.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    getNextPage() {
        const { currentPage } = this.state;
        this.getUserByPage(currentPage + 1);
    }

    getPrevPage() {
        const { currentPage } = this.state;
        this.getUserByPage(currentPage - 1);
    }

    deleteUser(id) {
        const { currentPage, noPerPage, totalUser } = this.state;
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete this user.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch(`/admin/user/delete/${id}`).then(
                            res => res.json()
                        ).then(
                            json => {
                                console.log(json);
                                const { success, error } = json;
                                if (success && !error) {
                                    let maxCurrentPage = currentPage * noPerPage;
                                    let totalAfterDel = totalUser - 1;
                                    if (maxCurrentPage <= totalAfterDel || (maxCurrentPage > totalAfterDel && totalAfterDel - (currentPage - 1) * noPerPage > 0)) {
                                        this.getUserByPage(currentPage);
                                    } else {
                                        this.getUserByPage(currentPage - 1);
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

    getUserByPage(page) {
        fetch(`/admin/user/pages/${page}`).then(
            res => res.json()
        ).then(
            json => {
                const { success, error, totalUser, users } = json;
                if (success && !error) {
                    this.setState({ totalUser, currentPage: page, users });
                }
            }
        );
    }

    componentDidMount() {
        const { currentPage } = this.state;
        this.getUserByPage(currentPage);
    }

    render() {
        const { totalUser, currentPage, noPerPage, users } = this.state;
        return (
            <div>
                <UserSearch totalUser={totalUser} />
                <UserInfoTable users={users} currentPage={currentPage} noPerPage={noPerPage} deleteUser={this.deleteUser} />
                <Pagination currentPage={currentPage} total={totalUser} noPerPage={noPerPage}
                    getPrevPage={this.getPrevPage} getNextPage={this.getNextPage} />
            </div>
        );
    }
}

export default User;