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
import Post from './pages/admin/post/Post';
import RevenueStatistic from './pages/admin/statistical/RevenueStatistic';
import ProductStatistic from './pages/admin/statistical/ProductStatistic';
import CUPost from './pages/admin/post/CUPost';

const Home = () => <h3>Home</h3>;

const routes = {
  admin: [
    {
      path: "/admin",
      component: Home,
      props: {}
    },
    {
      path: "/admin/users",
      component: User,
      props: {}
    },
    {
      path: "/admin/posts",
      component: Post,
      props: {}
    },
    {
      path: "/admin/posts/new",
      component: CUPost,
      props: { newPost: true }
    },
    {
      path: "/admin/posts/edit/:id",
      component: CUPost,
      props: { newPost: false }
    },
    {
      path: "/admin/statistical/revenue",
      component: RevenueStatistic,
      props: {}
    },
    {
      path: "/admin/statistical/product",
      component: ProductStatistic,
      props: {}
    }
  ],
  guest: [
    {
      path: "/",
      component: Home,
      props: {}
    },
    {
      path: "/user/signin",
      component: SignIn,
      props: {}
    },
    {
      path: "/user/signup",
      component: SignUp,
      props: {}
    },
    {
      path: "/user/forgotpassword",
      component: ForgotPassword,
      props: {}
    }
  ]
}

//get routes admin
const routeAdmin = route => (
  <Route exact path={route.path} render={props => (
    <AdminLayout>
      <route.component {...props} {...route.props} />
    </AdminLayout>
  )} />
);

//get routes guest
const routeGuest = route => (
  <Route exact path={route.path} render={props => (
    <GuestLayout>
      <route.component {...props} {...route.props} />
    </GuestLayout>
  )} />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* su dung switch de tim duong dan dau tien match */}
          <Switch>
            {/* route admin */}
            {routes.admin.map((route) => routeAdmin(route))}
            {/* route guest */}
            {routes.guest.map((route) => routeGuest(route))}
            <Route exact component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
