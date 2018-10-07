import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//using boostrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import GuestLayout from './layouts/GuestLayout';
import SignIn from './pages/auth/SignIn';
import NotFound from './pages/404';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import AdminLayout from './layouts/AdminLayout';
import User from './pages/admin/User';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* su dung switch de tim duong dan dau tien match */}
          <Switch>
            {/* route admin */}
            <Route exact path="/admin" render={props => (
              <AdminLayout />
            )} />
            <Route exact path="/admin/users" render={props => (
              <AdminLayout>
                <User />
              </AdminLayout>
            )} />

            <Route exact path="/" render={props => (
              <GuestLayout>
                <h1>Home Pages</h1>
              </GuestLayout>
            )} />
            <Route exact path="/user/signin" render={props => (
              <GuestLayout>
                <SignIn {...props} />
              </GuestLayout>
            )} />
            <Route exact path="/user/signup" render={props => (
              <GuestLayout>
                <SignUp {...props} />
              </GuestLayout>
            )} />
            <Route exact path="/user/forgotpassword" render={props => (
              <GuestLayout>
                <ForgotPassword {...props} />
              </GuestLayout>
            )} />
            <Route exact component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
