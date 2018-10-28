import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostRow from './PostRow';

class PostInfoTable extends Component {
    render() {
        const { posts, currentPage, noPerPage } = this.props.post;
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
                        {posts.map((post, index) => <PostRow key={post.id} pos={(currentPage - 1) * noPerPage + index + 1} postInfo={post} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProp(state) {
    return {
        post: state.admin.post
    }
}

export default connect(mapStateToProp)(PostInfoTable);