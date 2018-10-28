import { GET_POSTS, RESET_AD_POST_ERROR } from './types';
import axios from 'axios';
import { adPostError } from './admin_actions';

const ROOT_URL = 'http://localhost:5000';

export function getPostsByPage(page) {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/admin/post/pages/${page}`).then(response => {
            const { success, error } = response.data;
            if (success) {
                const { totalPost, posts } = response.data;
                dispatch({
                    type: GET_POSTS,
                    payload: { totalPost, currentPage: page, posts, erorr: '' }
                })
            } else {
                dispatch(adPostError(error));
            }
        }).catch(err => {
            console.log(err);
            dispatch(adPostError(err));
        });
    }
}

export function resetError() {
    return function (dispatch) {
        dispatch({
            type: RESET_AD_POST_ERROR,
            payload: { error: '' }
        })
    }
}