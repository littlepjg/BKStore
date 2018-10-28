import axios from 'axios';
import { alertMsg } from './admin_actions';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:5000';

export function signInUser({ email, passwd }) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/user/login`, { email, passwd })
            .then(response => {
                const { success, error, user } = response.data;
                if (success) {
                    dispatch(authUser(user));
                } else {
                    dispatch(authError(error));
                }
            })
            .catch(error => {
                if (error.response.status === 401) {
                    dispatch(authError('Invalid email or password.'));
                }
            });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function authUser(userInfo) {
    localStorage.setItem('user', JSON.stringify(userInfo));
    return {
        type: AUTH_USER,
        payload: userInfo
    }
}

export function signOutUser(history) {
    localStorage.removeItem('user');
    return function (dispatch) {
        dispatch({ type: UNAUTH_USER });
        dispatch(alertMsg('You are signed out!'));
        history.push('/user/signin');
    }
}

export function signUpUser({ full_name, email, passwd }) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/user/register`, { full_name, email, passwd })
            .then(response => {
                const { success, error, user } = response.data;
                if (success) {
                    dispatch({ type: AUTH_USER, payload: user })
                } else {
                    dispatch(authError(error));
                }
            })
            .catch(() => {
                dispatch(authError('bad login info'));
            });
    }
}