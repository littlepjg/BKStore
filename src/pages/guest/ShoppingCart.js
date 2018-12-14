import React, { Component } from 'react';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="shopping_cart">
                <div class="container">
                    <h2>Giỏ hàng của tôi</h2>
                    <div class="row">
                        <div class="col-sm-8">
                            <h4>Danh sách sản phẩm</h4>

                            <input type="number" min={0} placeholder="min" />

                        </div>
                        <div class="col-sm-4">
                            <h4>Thông tin đơn hàng</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingCart;