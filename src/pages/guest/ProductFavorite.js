import React, { Component } from 'react';
import ProductItemSmall from '../../components/guest/product/ProductItemSmall';
import ProductItemFavorite from '../../components/guest/product/ProductItemFavorite';

class ProductFavorite extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                        <ProductItemFavorite />
                        <ProductItemFavorite />
                        <ProductItemFavorite />
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