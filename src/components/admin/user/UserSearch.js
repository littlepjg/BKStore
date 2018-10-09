import React, { Component } from 'react';

class UserSearch extends Component {
    handleSubmit(e){
        e.preventDefault();
        this.props.getUserByEmail();
    }

    render() {
        const { totalUser, searchValue, handleChangeSearch} = this.props;
        return (
            <div>
                <h3>Total Users: {totalUser}</h3>

                <div className="search">
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <input type="text" className="form-control input-sm" placeholder="Search for users by email"
                            value={searchValue} onChange={(e) => handleChangeSearch(e.target.value)} />
                        <button type="submit" className="btn btn-primary btn-sm">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default UserSearch;