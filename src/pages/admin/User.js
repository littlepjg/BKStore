import React, { Component } from 'react';
import UserSearch from '../../components/admin/user/UserSearch';
import UserInfoTable from '../../components/admin/user/UserInfoTable';
import Pagination from '../../components/pagination/Pagination';
import './user.css';

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
    }

    getNextPage() {
        const { currentPage } = this.state;
        fetch(`/admin/user/pages/${currentPage + 1}`).then(
            res => res.json()
        ).then(
            json => {
                const { success, error, totalUser, users } = json;
                if (success && !error) {
                    this.setState({ totalUser, currentPage: currentPage + 1, users });
                }
            }
        );
    }

    getPrevPage() {
        const { currentPage } = this.state;
        fetch(`/admin/user/pages/${currentPage - 1}`).then(
            res => res.json()
        ).then(
            json => {
                const { success, error, totalUser, users } = json;
                if (success && !error) {
                    this.setState({ totalUser, currentPage: currentPage - 1, users });
                }
            }
        );
    }

    componentDidMount() {
        const { currentPage } = this.state;
        console.log("currentPage: ", currentPage);
        fetch(`/admin/user/pages/${currentPage}`).then(
            res => res.json()
        ).then(
            json => {
                const { success, error, totalUser, users } = json;
                if (success && !error) {
                    this.setState({ totalUser, users });
                }
            }
        );
    }

    render() {
        const { totalUser, currentPage, noPerPage, users } = this.state;
        return (
            <div>
                <UserSearch totalUser={totalUser} />
                <UserInfoTable users={users} currentPage={currentPage} noPerPage={noPerPage} />
                <Pagination currentPage={currentPage} total={totalUser} noPerPage={noPerPage}
                    getPrevPage={this.getPrevPage} getNextPage={this.getNextPage} />
            </div>
        );
    }
}

export default User;