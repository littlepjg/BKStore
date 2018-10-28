import { GET_USERS, REST_AD_USER_ERROR } from './types';
import axios from 'axios';
import { adUserError, } from './admin_actions';

const ROOT_URL = 'http://localhost:5000';

export function getUsersByPage(page, searchValue) {
    return function (dispatch) {
        let api = searchValue ? `${ROOT_URL}/admin/user/pages/${page}/${searchValue}` : `${ROOT_URL}/admin/user/pages/${page}`;
        axios.get(api).then(response => {
            const { success, error } = response.data;
            if (success) {
                const { totalUser, users } = response.data;
                dispatch({
                    type: GET_USERS,
                    payload: { totalUser, currentPage: page, users, searchValue, error: '' }
                })
            } else {
                dispatch(adUserError(error));
            }
        }).catch(error => {
            console.log(error);
            dispatch(adUserError(error));
        });
    }
}

export function resetError() {
    return function (dispatch) {
        dispatch({
            type: REST_AD_USER_ERROR,
            payload: { error: '' }
        })
    }
}