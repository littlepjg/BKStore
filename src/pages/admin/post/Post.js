import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CKEditor from 'react-ckeditor-wrapper';
import PostInfoTable from '../../../components/admin/post/PostInfoTable';
import Pagination from '../../../components/pagination/Pagination';

const initialState = {

}

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
    }

    render() {
        return (
            <div>
                <div className="row" style={{ marginBottom: "10px", marginTop: "35px" }}>
                    <div className="col-md-12">
                        <NavLink to="/admin/posts/new" className="btn btn-success pull-right">Add new post</NavLink>
                    </div>
                </div>
                <PostInfoTable />
                <Pagination />
            </div>
        );
    }
}

export default Post;