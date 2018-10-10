import React, { Component } from 'react';
import PostRow from './PostRow';

class PostInfoTable extends Component {
    render() {
        const { posts, currentPage, noPerPage, deletePost } = this.props;
        return (
            <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Link To</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {posts.map((post, index) => <PostRow key={post.id} pos={(currentPage - 1) * noPerPage + index + 1} post={post} deletePost={deletePost} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PostInfoTable;