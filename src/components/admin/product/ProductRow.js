import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ProductRow extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>
                    <NavLink to={`/admin/bill/detail/${1}`} className="btn btn-success">Chi tiết</NavLink>
                </td>
            </tr>
        );
    }
}

export default ProductRow;