import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PostRow extends Component {
    render() {
        const { pos, title, content, linkto } = this.props.post;
        return (
            <tr>
                <td>{pos}</td>
                <td>{title}</td>
                <td>{content}</td>
                <td><a href={linkto}>{linkto}</a></td>
                <td>
                    <NavLink to="/admin/posts/edit" className="btn btn-primary">Edit</NavLink>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default PostRow;