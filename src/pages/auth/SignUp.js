import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const initialState = {
    full_name: '',
    email: '',
    passwd: '',
    passwordConfirm: '',
    error: '',
    passwordMatch: false
}

class SignUp extends Component {
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

    confirmPW() {
        const { password, passwordConfirm } = this.state
        const isMatch = password === passwordConfirm && password.length > 7;
        this.setState({
            passwordMatch: isMatch
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { full_name, email, passwd } = this.state;
        let user = {
            full_name,
            email,
            passwd
        }
        axios.post('http://localhost:5000/user/register', user).then(response => {
            const { success, error } = response.data;
            this.setState({ error });
        })
    }

    validateForm() {
        const { full_name, email, passwd, passwordConfirm } = this.state;
        const isInvalid = !full_name || !email || !passwd || passwd !== passwordConfirm || passwd.length <= 7;
        return isInvalid;
    }

    render() {
        const { full_name, email, passwd, passwordConfirm, error } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-push-3">
                        <div className="main-div auth">
                            <div className="panel">
                                <h2>Register</h2>
                                <p>Please enter the information below</p>
                            </div>

                            <form className="signup-form" onSubmit={event => this.handleSubmit(event)}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Full Name" required
                                        name="full_name" value={full_name} onChange={event => this.handleChange(event)} />
                                </div>

                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email Address" required
                                        name="email" value={email} onChange={event => this.handleChange(event)} />
                                </div>

                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password (Minimum of 8 characters)"
                                        required name="passwd" value={passwd} onChange={event => this.handleChange(event)} />
                                </div>

                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password Confirm"
                                        required name="passwordConfirm" value={passwordConfirm} onChange={event => this.handleChange(event)} />
                                </div>

                                <div className="action">
                                    <p>Have an account. <NavLink to="/user/signin">Login</NavLink></p>
                                </div>
                                {error && (
                                    <div className="alert alert-danger">
                                        <p>{error}</p>
                                    </div>
                                )}
                                <button type="submit" className="btn btn-primary" disabled={this.validateForm()}>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;