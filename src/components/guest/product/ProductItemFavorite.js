
import React, { Component } from 'react';
import styled from 'styled-components';

import logo from './products-01.png';

const Container = styled.div`
.products_item_favorite{
    display:flex;
    justify-content: space-around;
    box-shadow: 0px 0px 1px 1px #F1F1F1;
    margin-bottom: 15px;
    padding-top: 10px;
    height: auto;
}
.products_item_favorite .info_item_favorite{
    display:flex;
}
.products_item_favorite .info_item_favorite_image img{
    width: 65px;
    height: 95px;
}

.products_item_favorite .info_item_favorite_describe{
    margin-left: 20px;
}

.products_item_favorite .info_item_favorite_describe .name{
    font-size: 16px;
    margin-bottom: 5px;
}
.products_item_favorite .info_item_favorite_describe .describe{
    font-size: 14px;
    color: gray;
    margin-bottom: 5px;
}
.products_item_favorite .price_item_favorite{
    font-size: 20px;
    color: orange;
}

.products_item_favorite .button_add{
    display: flex;
    align-items: center;
}

.products_item_favorite .add{
    height: 50%;
}
`;

class ProductItemFavorite extends Component {
    render() {
        return (
            <Container>
                <div className="products_item_favorite">
                    <div className="info_item_favorite">
                        <div class="info_item_favorite_image">
                            <a href="#"><img src={logo} alt="ảnh sản phẩm" /></a>
                        </div>
                        <div class="info_item_favorite_describe">
                            <p class="name">MacBook Air 13.3-inch, 1.6 GHz Intel core i5 2015</p>
                            <p class="describe">Màu: bạc</p>
                            <a href="#">
                                <span class="glyphicon glyphicon-trash"></span>
                            </a>
                        </div>
                    </div>
                    <p className="price_item_favorite">2.000.000 đ</p>
                    <div className="button_add">
                        <button type="button" class="btn btn-success add"><i class="glyphicon glyphicon-shopping-cart"></i></button>
                    </div>
                </div>
            </Container>
        );
    }
}
export default ProductItemFavorite;