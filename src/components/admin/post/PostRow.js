import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import axios from 'axios';

import * as actions from '../../../actions/admin_post_actions';

class PostRow extends Component {
    deletePost(id) {
        const { currentPageNum, totalCount, limit } = this.props.post.pager;
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete this post.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios.post(`/admin/post/delete`, { id }).then(response => {
                            const { success, error } = response.data;
                            if (success) {
                                let maxCurrentPage = currentPageNum * limit;
                                let totalAfterDel = totalCount - 1;
                                if (currentPageNum === 1 || maxCurrentPage <= totalAfterDel || (maxCurrentPage > totalAfterDel && totalAfterDel - (currentPageNum - 1) * limit > 0)) {
                                    this.props.getPostsByPage(limit, currentPageNum);
                                } else {
                                    this.props.getPostsByPage(limit, currentPageNum - 1);
                                }
                            }
                        }).catch(err => {
                            this.props.returnError(err);
                        })
                    }
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    render() {
        const { id, title, content, linkto } = this.props.postInfo;
        const { pos } = this.props;
        return (
            <tr>
                <td>{`${pos}`}</td>
                <td>{title}</td>
                <td>{content}</td>
                <td><a href={linkto}>{linkto}</a></td>
                <td>
                    <NavLink to={`/admin/posts/edit/${id}`} className="btn btn-primary">Chỉnh sửa</NavLink>
                    <button className="btn btn-danger" onClick={() => this.deletePost(id)}>Xóa</button>
                </td>
            </tr >
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.admin.post
    }
}

export default connect(mapStateToProps, actions)(PostRow);