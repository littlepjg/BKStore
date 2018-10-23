import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const initialState = {
    email: '',
    passwd: '',
    error: ''
}

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
    }

    clearState() {
        this.setState({ ...initialState })
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { email, passwd } = this.state;
        axios.post('http://localhost:5000/user/login', { email, passwd }).then(response => {
            console.log(response);
        }).catch(error => {
            if (error.response.status == 401) {
                this.setState({ error: 'Invalid email or password.' });
            }
        })
    }

    validateForm() {
        const { email, passwd } = this.state;
        const isInvalid = !email || passwd.length < 8;

        return isInvalid;
    }

    render() {
        const { email, passwd, error } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-push-3">
                        <div className="main-div auth">
                            <div className="panel">
                                <h2>Login</h2>
                                <p>Please enter your email and password</p>
                            </div>

                            <form className="signin-form" onSubmit={event => this.handleSubmit(event)}>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email Address"
                                        name="email" value={email} onChange={event => this.handleChange(event)} />
                                </div>

                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password"
                                        name="passwd" value={passwd} onChange={event => this.handleChange(event)} />
                                </div>

                                <div className="action">
                                    <NavLink to="/user/forgotpassword">Forgot password?</NavLink>
                                    <p>Don't have an account yet? <NavLink to="/user/signup">Register</NavLink></p>
                                </div>

                                {error && (
                                    <div className="alert alert-danger">
                                        <p>{error}</p>
                                    </div>
                                )}

                                <button type="submit" className="btn btn-primary" disabled={this.validateForm()}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;