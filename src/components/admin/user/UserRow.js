import React, { Component } from 'react';

class UserRow extends Component {
    handleDeleteUser(e, id) {
        this.props.deleteUser(id);
    }

    render() {
        const { id, full_name, email, address } = this.props.user;
        const pos = this.props.pos;
        return (
            <tr>
                <td>{pos}</td>
                <td>{full_name}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td><button type="button" className="btn btn-danger" onClick={(e) => this.handleDeleteUser(e, id)}>Delete</button></td>
            </tr>
        );
    }
}

export default UserRow;