import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserRow from './UserRow';

class UserInfoTable extends Component {
    render() {
        const { users, pager: { currentPageNum, limit } } = this.props.user;
        return (
            <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Họ Tên</th>
                            <th>Email</th>
                            <th>Địa chỉ</th>
                            <th>Hoạt động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <UserRow key={user.id} pos={(currentPageNum - 1) * limit + index + 1} userInfo={user} />)}
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