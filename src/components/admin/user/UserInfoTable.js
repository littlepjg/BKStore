import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserRow from './UserRow';

class UserInfoTable extends Component {
    render() {
        const { users, currentPage, noPerPage } = this.props.user;
        return (
            <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <UserRow key={user.id} pos={(currentPage - 1) * noPerPage + index + 1} userInfo={user} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.admin.user
    }
}

export default connect(mapStateToProps)(UserInfoTable);