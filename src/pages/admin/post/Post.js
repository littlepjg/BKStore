import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import axios from 'axios';

import 'react-confirm-alert/src/react-confirm-alert.css';

import { WhitePanel } from '../../../theme/Style';
import PostInfoTable from '../../../components/admin/post/PostInfoTable';
import Pagination from '../../../components/pagination/Pagination';
import MessageDialog from '../../../components/dialog/MessageDialog';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPost: 0,
            currentPage: 1,
            noPerPage: 10,
            posts: [],
            searchValue: '',
            error: '',
        };
        this.getPrevPage = this.getPrevPage.bind(this);
        this.getNextPage = this.getNextPage.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.resetError = this.resetError.bind(this);
    }

    getNextPage() {
        const { currentPage } = this.state;
        this.getPostByPage(currentPage + 1);
    }

    getPrevPage() {
        const { currentPage } = this.state;
        this.getPostByPage(currentPage - 1);
    }

    deletePost(id) {
        const { currentPage, noPerPage, totalPost } = this.state;
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
                                let maxCurrentPage = currentPage * noPerPage;
                                let totalAfterDel = totalPost - 1;
                                if (maxCurrentPage <= totalAfterDel || (maxCurrentPage > totalAfterDel && totalAfterDel - (currentPage - 1) * noPerPage > 0)) {
                                    this.getPostByPage(currentPage);
                                } else {
                                    this.getPostByPage(currentPage - 1);
                                }
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    }
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    getPostByPage(page) {
        axios.get(`/admin/post/pages/${page}`).then(response => {
            const { success, error } = response.data;
            if (success) {
                const { totalPost, posts } = response.data;
                this.setState({ totalPost, currentPage: page, posts });
            } else {
                this.setState({ error });
            }
        }).catch(err => {
            console.log(err);
        });
    }

    resetError() {
        this.setState({ error: '' });
    }

    componentDidMount() {
        const { currentPage } = this.state;
        this.getPostByPage(currentPage);
    }

    render() {
        const { totalPost, currentPage, noPerPage, posts, error } = this.state;
        return (
            <WhitePanel>
                <div className="row" style={{ marginBottom: "10px", marginTop: "35px" }}>
                    <div className="col-md-12">
                        <NavLink to="/admin/posts/new" className="btn btn-success pull-right">Add new post</NavLink>
                    </div>
                </div>
                <PostInfoTable posts={posts} currentPage={currentPage} noPerPage={noPerPage} deletePost={this.deletePost} />
                <Pagination currentPage={currentPage} total={totalPost} noPerPage={noPerPage}
                    getPrevPage={this.getPrevPage} getNextPage={this.getNextPage} />
                {error && <MessageDialog title={"Message"} message={error} resetMessage={this.resetError} />}
            </WhitePanel>
        );
    }
}

export default Post;