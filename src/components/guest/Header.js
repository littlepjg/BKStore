import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
    background: #f4f4f4;

    .container {
        display: flex;
        align-items: center;
    }

    a.navbar-brand {
        color: #ffffff;
        font-size: 2em;
    }

    a.navbar-brand:hover {
        color: #ffffff;
    }

    form {
        display: flex;
    }

    form input {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    form button {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        padding-left: 30px;
    }
`;

class Header extends Component {
    render() {
        return (
            <NavBar className="navbar navbar-default header" role="navigation" >
                <div className="container">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/">BKStore</NavLink>
                    </div>
                    <div>
                        <form action="" method="POST" role="form">
                            <input type="text" className="form-control" placeholder="Search for ..." />
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                </div>
            </NavBar>
        );
    }
}

export default Header;