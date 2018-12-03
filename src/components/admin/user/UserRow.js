import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import axios from 'axios';
import { connect } from 'react-redux';

import * as actions from '../../../actions/admin_user_action';

class UserRow extends Component {
    deleteUser(id) {
        const { pager: { currentPageNum, totalCount, limit }, searchValue } = this.props.user;
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
                                    let maxCurrentPage = currentPageNum * limit;
                                    let totalAfterDel = totalCount - 1;
                                    if (maxCurrentPage <= totalAfterDel || (maxCurrentPage > totalAfterDel && totalAfterDel - (currentPageNum - 1) * limit > 0)) {
                                        this.props.getUsersByPage(limit, currentPageNum, searchValue);
                                    } else {
                                        this.props.getUsersByPage(limit, currentPageNum - 1, searchValue);
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

    render() {
        const { id, full_name, email, address } = this.props.userInfo;
        const pos = this.props.pos;
        return (
            <tr>
                <td>{pos}</td>
                <td>{full_name}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td><button type="button" className="btn btn-danger" onClick={() => this.deleteUser(id)}>Xóa</button></td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.admin.user
    }
}

export default connect(mapStateToProps, actions)(UserRow);