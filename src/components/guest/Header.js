import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default header" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/">BKStore</NavLink>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div>
                        <form className="navbar-form navbar-left form-search" role="search">
                            <div className="form-group">
                                <input type="text" name="search" className="form-control" placeholder="Search" />
                            </div>
                            <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                        </form>

                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;