import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PostRow extends Component {
    render() {
        const { id, title, content, linkto } = this.props.post;
        const { pos, deletePost } = this.props;
        return (
            <tr>
                <td>{pos}</td>
                <td>{title}</td>
                <td>{content}</td>
                <td><a href={linkto}>{linkto}</a></td>
                <td>
                    <NavLink to={`/admin/posts/edit/${id}`} className="btn btn-primary">Edit</NavLink>
                    <button className="btn btn-danger" onClick={() => deletePost(id)}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default PostRow;