import React, { Component } from 'react';

class ProductATRow extends Component {
    // action = 1: liên kết
    // action = 2: xóa
    render() {
        const { action } = this.props;
        return (
            <tr>
                <td>1</td>
                <td>Bộ nhớ trong</td>
                <td>
                    {action == 1 && <button className="btn btn-success">Liên kết</button>}
                    {action == 2 && <button className="btn btn-danger">Xóa</button>}
                </td>
            </tr>
        );
    }
}

export default ProductATRow;