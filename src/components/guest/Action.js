import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actions from '../../actions';

const Container = styled.div`
    background: #0D2934;
    ul {
        margin-bottom: 0px;
        padding: 5px 0px;
        display: flex;
        justify-content: flex-end;
    }
    li {
        list-style: none;
        text-transform: uppercase;
        font-size: 12px;
        padding-left: 15px;
    }

    li > a {
        color: #a8b2b7;
        text-decoration: none;
        cursor: pointer;
    }

    li > a: hover {
        color: #ffffff;
    }
`;

class Action extends Component {
    handleSignOut(e) {
        e.preventDefault();
        const { history, signOutUser } = this.props;
        signOutUser(history);
    }

    render() {
        const { authenticated } = this.props.auth;
        return (
            <Container>
                <ul className="container">
                    <li><NavLink to="/customer-care">Chăm sóc khách hàng</NavLink></li>
                    {!authenticated && <li><NavLink to="/user/signin">Đăng nhập</NavLink></li>}
                    {!authenticated && <li><NavLink to="/user/signup">Đăng ký</NavLink></li>}
                    {authenticated && <li><a onClick={e => this.handleSignOut(e)}>Đăng xuất</a></li>}
                    {authenticated && <li><NavLink to="/user/account">Tài khoản {this.props.auth.user.full_name}</NavLink></li>}
                    <li><NavLink to="/change-language">Change language</NavLink></li>
                </ul>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default withRouter(connect(mapStateToProps, actions)(Action));