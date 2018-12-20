import React, { Component } from 'react';
import styled from 'styled-components';
import ProductItemCart from '../../components/guest/product/ProductItemCart';
import axios from 'axios';
import { connect } from 'react-redux';

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

.no_products_cart{
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.no_products_cart .btn-buying{
    background-color: white;
  color: black;
  border: 2px solid #1a76b3;
  font-size: 20px;
}
.no_products_cart p {
    font-size: 22px;
}
`
class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            total: 0,
        }
    }

    componentWillMount() {
        const ROOT_URL = 'http://localhost:5000';

        axios.get(`${ROOT_URL}/user/cart`, {
            params: {
                user_id: this.props.user_id,
            }
        }).then(response => {
            const { success, error } = response.data;
            console.log(response.data);

            if (success) {
                const { products } = response.data;
                console.log(products);
                this.setState({
                    products
                });
            } else {
                console.log("error: Dữ liệu carts trống");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    addProductFavorites = (product_id) => {
        const ROOT_URL = 'http://localhost:5000';
        // this.props.user_id
        axios.post(`${ROOT_URL}/user/favorite/add`, {
            user_id: 2,
            product_id: product_id,
        }).then(response => {
            const { success, error } = response.data;
            if (success) {
                alert('Đã thêm sản phẩm vào danh sách yêu thích');
            } else {
                console.log("error: Xảy ra lỗi thêm dữ liệu vào cơ sở dữ liệu");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    deleteProductCart = (index) => {
        const { products } = this.state;
        if (window.confirm('Bạn có muốn xóa sản phẩm khỏi giỏ hàng không?')) {
            const ROOT_URL = 'http://localhost:5000';

            axios.post(`${ROOT_URL}/user/cart/delete`, {
                user_id: this.props.user_id,
                product_id: products[index].id,
            }).then(response => {
                const { success, error } = response.data;
                if (success) {
                    products.splice(index, 1);
                    this.setState({ products });
                    console.log('success');
                } else {
                    console.log("error: Xoa san pham khoi gio hang that bai");
                }
            }).catch(err => {
                console.log(err);
            });
        }
    }

    changeAmountProductCartSub = (index) => {
        const { products } = this.state;
        const products_sub = products.map((e, i) => {
            return (i === index) ? {
                id: e.id,
                name: e.name,
                images: e.images,
                description: e.description,
                price: e.price,
                amount: (e.amount > 1) ? (e.amount - 1) : 1,
            } : e;
        })
        this.setState({ products: products_sub });
        const ROOT_URL = 'http://localhost:5000';

        axios.post(`${ROOT_URL}/user/cart/change`, {
            user_id: this.props.user_id,
            product_id: products[index].id,
            amount: products[index].amount,
        }).then(response => {
            const { success, error } = response.data;
            if (success) {
                console.log('success');
            } else {
                console.log("error: Thay doi so luong san pham bi loi");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    changeAmountProductCartPlus = (index) => {
        const { products } = this.state;
        const products_plus = products.map((e, i) => {
            return (i === index) ? {
                id: e.id,
                name: e.name,
                images: e.images,
                description: e.description,
                price: e.price,
                amount: e.amount + 1,
            } : e;
        })
        this.setState({ products: products_plus });
        const ROOT_URL = 'http://localhost:5000';

        axios.post(`${ROOT_URL}/user/cart/change`, {
            user_id: this.props.user_id,
            product_id: products[index].id,
            amount: products[index].amount,
        }).then(response => {
            const { success, error } = response.data;
            if (success) {
                console.log('success');
            } else {
                console.log("error: Thay doi so luong san pham bi loi");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    // checkAll = () => {
    //     this.setState({
    //         checked: !this.state.checked
    //     })
    // }

    totalPrice = (index) => {
        const { products, total } = this.state;
        this.setState({
            total: total + products[index].price * products[index].amount
        })
    }

    render() {
        const { products, total } = this.state;
        const count = products.length;
        return (
            <Container>
                {
                    count === 0 && <div className="container no_products_cart">
                        <p>Không có sản phẩm nào trong giỏ hàng</p>
                        <a href="/" class="btn btn-default btn-buying">Tiếp tục mua sắm</a>
                    </div>
                }
                {
                    count !== 0 && <div id="shopping_cart">
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
                                            <span>CHỌN TẤT CẢ (0 SẢN PHẨM)</span>
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
                                        <ProductItemCart products={products}
                                            addProductFavorites={this.addProductFavorites}
                                            deleteProductCart={this.deleteProductCart}
                                            changeAmountProductCartSub={this.changeAmountProductCartSub}
                                            changeAmountProductCartPlus={this.changeAmountProductCartPlus}
                                            totalPrice={this.totalPrice} />
                                    </div>
                                </div>
                                <div class="col-sm-4 info_cart">
                                    <h4>Thông tin đơn hàng</h4>
                                    <div class="before_info_cost">
                                        <div>
                                            <div class="info_left">Tạm tính</div>
                                            <div class="info_right">{total}</div>
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
                                            <div class="info_right total_cost">{total}</div>
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
                }
            </Container>
        )
    }
}
function mapStateToProps(state) {
    return {
        user_id: state.auth.user.id
    }
}

export default connect(mapStateToProps)(ShoppingCart);