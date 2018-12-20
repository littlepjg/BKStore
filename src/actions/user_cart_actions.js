import { GET_CART } from './types';
import axios from 'axios';

import { SERVER_URL, PORT } from '../common/constant';

export function getUserCart(user_id) {
    return function (dispatch) {
        axios.get(`${SERVER_URL}:${PORT}/user/cart`, {
            params: {
                user_id
            }
        }).then(response => {
            const { success, error } = response.data;
            if (success) {
                console.log('cart', response.data);
                const { products } = response.data;
                dispatch({
                    type: GET_CART,
                    payload: { products, error: '' }
                })
            }
        }).catch(error => {
            console.log(error);
        });
    }
}
