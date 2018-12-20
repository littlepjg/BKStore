import React, { Component } from 'react';
import styled from 'styled-components';
import ProductItemCart from '../../components/guest/product/ProductItemCart';

const Container = styled.div`
#shopping_cart .info_cart{
    position: relative;
    margin-bottom: 30px;
    padding: 10px 10px 25px 10px;
    box-shadow: 0px 0px 2px 2px #E6E6E6;
}
#shopping_cart .info_cart h4{
    font-weight: bold;
}
.info_right{
    display: inline-block;
    position: absolute;
    right: 10px;
    font-size: 16px;
}
.info_left{
    display: inline-block;
}
.before_info_cost{
    margin-bottom: 15px;
    line-height: 35px;
    font-size: 15px;
}
.after_info_cost{
    margin-top: 20px;
    margin-bottom: 45px;
    line-height: 28px;
    font-size: 15px;
}
.vat{
    display: inline-block;
    position: absolute;
    right: 10px;
    font-size: 14px;
}
.div_button button{
    width: 99%;
    color: white;
}
.total_cost{
    color: red;
}

.list_products h4{
    font-weight: bold;
}

.list_products .checkbox-wrap{
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.list_products .title_price_count{
    width: 40%;
    display: flex;
    align-items: center;
}
.list_products .title_price_count .title_price{
    width: 60%;
    text-align: center;
}
.list_products .title_price_count .title_count{
    width: 40%;
    text-align: center;
}
.list_products .title_list{
    display: flex;
    height: 65px;
    color: gray;
    box-shadow: 0px 0px 2px 2px #E6E6E6;
    margin-right: 0px;
}
.list_products .title_list .input_check{
    display: flex;
    align-items: center;
    padding-left: 15px;
}
.list_products .title_list .input_check input{
    width: 18px;
    height: 18px;
}

`
class ShoppingCart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <div id="shopping_cart">
                    <div class="container">
                        <h2>Giỏ hàng của tôi</h2>
                        <div class="row">
                            <div class="col-sm-8 list_products">
                                <h4>Danh sách sản phẩm</h4>
                                <div className="row title_list">
                                    <div className="input_check">
                                        <input type="checkbox" aria-checked="true" value="on" />
                                    </div>
                                    <div class="checkbox-wrap">
                                        <span>CHỌN TẤT CẢ (2 SẢN PHẨM)</span>
                                        <a href="#">
                                            <i class="fa fa-trash"></i>
                                            <span>XÓA</span>
                                        </a>
                                    </div>
                                    <div className="title_price_count">
                                        <div className="title_price">GIÁ</div>
                                        <div className="title_count">sỐ LƯỢNG</div>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <ProductItemCart />
                                </div>
                            </div>
                            <div class="col-sm-4 info_cart">
                                <h4>Thông tin đơn hàng</h4>
                                <div class="before_info_cost">
                                    <div>
                                        <div class="info_left">Tạm tính (0 sản phẩm)</div>
                                        <div class="info_right">0 đ</div>
                                    </div>
                                    <div>
                                        <div class="info_left">Phí giao hàng</div>
                                        <div class="info_right">miễn phí</div>
                                    </div>
                                </div>
                                <div>
                                    <input type="text" class="info_left" />
                                    <button type="button" class="btn btn-success info_right">Áp dụng</button>
                                </div>
                                <div class="after_info_cost">
                                    <div>
                                        <div class="info_left">Tổng cộng</div>
                                        <div class="info_right total_cost">0 đ</div>
                                    </div>
                                    <div class="vat">Đã bao gồm VAT (nếu có)</div>
                                </div>
                                <div class="div_button">
                                    <button type="button" class="btn btn-info">XÁC NHẬN GIỎ HÀNG</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default ShoppingCart;