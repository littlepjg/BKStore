import React, { Component } from 'react';
import styled from 'styled-components';

const FormUser = styled.form`
    padding: 5px 0 35px 0;
    width: 300px;
    display: flex;
    margin-left: 50px;

    input {
        padding: 0 8px 0 8px;
        border-radius: 1px;
    }

    button {
        border-radius: 1px;
    }
`;

class UserSearch extends Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.getUserByEmail();
    }

    render() {
        const { totalUser, searchValue, handleChangeSearch } = this.props;
        return (
            <div>
                <h3>Total Users: {totalUser}</h3>

                <FormUser onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" className="form-control input-sm" placeholder="Search for users by email"
                        value={searchValue} onChange={(e) => handleChangeSearch(e.target.value)} />
                    <button type="submit" className="btn btn-primary btn-sm">Search</button>
                </FormUser>
            </div>
        );
    }
}

export default UserSearch;