import {
    GET_POSTS, AD_POST_ERROR, RESET_AD_POST_ERROR,
    GET_USERS, AD_USER_ERROR, REST_AD_USER_ERROR
} from '../actions/types';

const defaultState = {
    post: {
        totalPost: 0,
        currentPage: 1,
        noPerPage: 10,
        posts: [],
        error: ''
    },
    user: {
        totalUser: 0,
        currentPage: 1,
        noPerPage: 10,
        users: [],
        searchValue: '',
        error: ''
    }
}

export default function (state = { ...defaultState }, action) {
    switch (action.type) {
        case GET_POSTS:
        case AD_POST_ERROR:
        case RESET_AD_POST_ERROR:
            return { ...state, post: { ...state.post, ...action.payload } };
        case GET_USERS:
        case AD_USER_ERROR:
        case REST_AD_USER_ERROR:
            return { ...state, user: { ...state.user, ...action.payload } };
        default:
            return state;
    }
}