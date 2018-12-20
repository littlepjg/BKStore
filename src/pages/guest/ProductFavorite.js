import React, { Component } from 'react';
import ProductItemSmall from '../../components/guest/product/ProductItemSmall';
import ProductItemFavorite from '../../components/guest/product/ProductItemFavorite';
import axios from 'axios';
import { connect } from 'react-redux';

class ProductFavorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            productsuggest: [],
        }
    }

    componentWillMount() {
        const ROOT_URL = 'http://localhost:5000';
        axios.get(`${ROOT_URL}/user/favorite`, {
            params: {
                user_id: this.props.user_id,
            }
        }).then(response => {
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
        //get productsuggest
        axios.get(`${ROOT_URL}/user/favorite/suggest`).then(response => {
            const { success, error } = response.data;
            console.log(response.data)
            if (success) {
                const { productsuggest } = response.data;
                this.setState({
                    productsuggest
                })
            } else {
                console.log("error: Dữ liệu products đề cử trống");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    deleteProductFavorites = (index) => {
        const { products } = this.state;

        const ROOT_URL = 'http://localhost:5000';

        axios.post(`${ROOT_URL}/user/favorite/delete`, {
            user_id: this.props.user_id,
            product_id: products[index].id,
        }).then(response => {
            const { success, error } = response.data;
            if (success) {
                products.splice(index, 1);
                this.setState({ products });
                console.log('success');
            } else {
                console.log("error: Xoa san pham yeu thich that bai");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        const { products, productsuggest } = this.state;
        const count = products.length;
        return (
            <div id="favorites">
                <div class="container list_favorites">
                    <h2>Danh sách yêu thích</h2>
                    <hr />
                    <h4>Sản phẩm yêu thích</h4>
                    {
                        count === 0 && <div class="row text-center">
                            <span class="glyphicon glyphicon-heart-empty"></span>
                            <p>Chưa có danh mục yêu thích</p>
                            <p>Thêm sản phẩm vào danh sách yêu thích để hiển thị ở đây.</p>
                        </div>
                    }
                    {
                        count !== 0 && <ProductItemFavorite products={products} deleteProductFavorites={this.deleteProductFavorites} />
                    }
                    <div className="add_all">
                        <a href="#">Thêm tất cả vào giỏ hàng</a>
                    </div>
                    <div class="row text-center">
                        <a href="/" class="btn btn-default btn-buying">Tiếp tục mua sắm</a>
                    </div>
                </div>
                <div class="container offer_products">
                    <h4>Sản phẩm đề cử</h4>
                    <div class="row">
                        {
                            productsuggest.map((e, index) => {
                                console.log(e);
                                return (
                                    <div className="col-sm-2">
                                        <ProductItemSmall key={index} productsuggest={e} />
                                    </div>
                                )
                            }
                            )
                        }
                        {/* <div className="col-sm-2">
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
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user_id: state.auth.user.id
    }
}

export default connect(mapStateToProps)(ProductFavorite);