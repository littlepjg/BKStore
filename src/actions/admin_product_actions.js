import { GET_PRODUCTS_ADMIN } from './types';
import axios from 'axios';
import { adPostError } from './admin_actions';

const ROOT_URL = 'http://localhost:5000';

export function getProductsAdminByPage(limit, pageNum, searchValue, filter) {
    return function (dispatch) {
        const params = searchValue ? { limit, pageNum, searchValue, filter } : { limit, pageNum, filter };
        axios.get(`${ROOT_URL}/admin/product/pages`, {
            params
        }).then(response => {
            const { success, error } = response.data;
            if (success) {
                const { pager, products } = response.data;
                dispatch({
                    type: GET_PRODUCTS_ADMIN,
                    payload: { pager, products, searchValue, filter, erorr: '' }
                })
            } else {
                console.log("error admin_product_action: ", error);
            }
        }).catch(error => {
            console.log("error admin_product_action: ", error);
        });
    }
}