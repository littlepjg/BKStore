import React, { Component } from 'react';
import ProductItemSmall from '../../components/guest/product/ProductItemSmall';
import ProductItemFavorite from '../../components/guest/product/ProductItemFavorite';
import axios from 'axios';

class ProductFavorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentWillMount() {
        const ROOT_URL = 'http://localhost:5000';
        // get provider
        axios.get(`${ROOT_URL}/user/favorite/1`/*, { user_id }*/).then(response => {    //user id lay o dau
            const { success, error } = response.data;
            if (success) {
                const { products } = response.data;
                this.setState({
                    products
                });
            } else {
                console.log("error: Dữ liệu favorite trống");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    deleteProductFavorites = (index) => {
        const { products } = this.state;
        products.splice(index, 1);
        this.setState({ products });

        axios.post(`${ROOT_URL}/delete`, formData).then(response => {
            const { success, error } = response.data;
            if (success) {
                console.log('success');
            } else {
                console.log("error: Them product that bai");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        const { products } = this.state;
        return (
            <div id="favorites">
                <div class="container list_favorites">
                    <h2>Danh sách yêu thích</h2>
                    <hr />
                    <h4>Sản phẩm yêu thích</h4>
                    {/* <div class="row text-center">
                        <span class="glyphicon glyphicon-heart-empty"></span>
                        <p>Chưa có danh mục yêu thích</p>
                        <p>Thêm sản phẩm vào danh sách yêu thích để hiển thị ở đây.</p>
                    </div> */}
                    <div className="row">
                        <ProductItemFavorite products={products} deleteProductFavorites={this.deleteProductFavorites} />
                        {/* <ProductItemFavorite />
                        <ProductItemFavorite /> */}
                        <div className="add_all">
                            <a href="#">Thêm tất cả vào giỏ hàng</a>
                        </div>
                    </div>
                    <div class="row text-center">
                        <button type="button" class="btn btn-default btn-buying">Tiếp tục mua sắm</button>
                    </div>
                </div>
                <div class="container offer_products">
                    <h4>Sản phẩm đề cử</h4>
                    <div class="row">
                        <div className="col-sm-2">
                            <ProductItemSmall />
                        </div>
                        <div className="col-sm-2">
                            <ProductItemSmall />
                        </div>
                        <div className="col-sm-2">
                            <ProductItemSmall />
                        </div>
                        <div className="col-sm-2">
                            <ProductItemSmall />
                        </div>
                        <div className="col-sm-2">
                            <ProductItemSmall />
                        </div>
                        <div className="col-sm-2">
                            <ProductItemSmall />
                        </div>
                        <div className="col-sm-2">
                            <ProductItemSmall />
                        </div>
                        <div className="col-sm-2">
                            <ProductItemSmall />
                        </div>
                        <div className="col-sm-2">
                            <ProductItemSmall />
                        </div>
                        <div className="col-sm-2">
                            <ProductItemSmall />
                        </div>
                        <div className="col-sm-2">
                            <ProductItemSmall />
                        </div>
                        <div className="col-sm-2">
                            <ProductItemSmall />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductFavorite;