import {
    GET_POSTS, AD_POST_ERROR, RESET_AD_POST_ERROR,
    GET_USERS, AD_USER_ERROR, REST_AD_USER_ERROR
} from '../actions/types';

const defaultState = {
    post: {
        pager: {
            offset: 0,
            limit: 10,
            currentPageNum: 1,
            totalCount: 0,
            hasPrev: false,
            hasNext: false,
            prevPageNum: undefined,
            nextPageNum: undefined,
            lastPageNum: 1,
        },
        posts: [],
        error: ''
    },
    user: {
        pager: {
            offset: 0,
            limit: 10,
            currentPageNum: 1,
            totalCount: 0,
            hasPrev: false,
            hasNext: false,
            prevPageNum: undefined,
            nextPageNum: undefined,
            lastPageNum: 1,
        },
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