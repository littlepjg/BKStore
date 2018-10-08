import React, { Component } from 'react';

class UserSearch extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("search");
    }

    render() {
        const { totalUser } = this.props;
        return (
            <div>
                <h3>Total Users: {totalUser}</h3>

                <div className="search">
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <input type="text" className="form-control input-sm" placeholder="Search for users by email" />
                        <button type="submit" className="btn btn-primary btn-sm">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default UserSearch;