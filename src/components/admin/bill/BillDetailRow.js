import React, { Component } from 'react';

class BillDetailRow extends Component {
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
                <td>
                    <button type="button" className="btn btn-success" onClick={() => this.props.handleVisibleProductImages()}>Xem hình SP</button>
                </td>
            </tr>
        );
    }
}

export default BillDetailRow;