import React, { Component } from 'react';
import styled from 'styled-components';
import image01 from './products-01.png';

const Container = styled.div`
    border: 1px solid #e1e1e1;
    position: relative;
    overflow: hidden;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #fff;
    padding: 15px;
    margin-top: 15px;
    min-height: 150px;

    &:hover {
        background: #fff;
        border-color: #f7544a;
        -webkit-box-shadow: 0 0 5px 1px #d3d3d3;
        box-shadow: 0 0 5px 1px #d3d3d3;
    }

    .thumbnail {
        border: medium none;
        float: left;
        margin: 0;
        padding: 15px 10px 5px 10px;
        position: relative;
        width: 18%;
        height: auto;
        text-align: center;
    }

    .product-list-description {
        float: right;
        width: 75%;

        .productname {
            font-size: 20px;
            color: #434343;
            text-align: left;
            margin-top: 15px;
            font-weight: 400;
            float: left;
            width: 100%;
            margin-bottom: 10px;

        }

        .price {
            float: left;
            width: 40%;
        }
        .new_price {
            float: left;
            font-size: 28px;
            color: #ff3636;
            margin-right: 10px;
        }
        .new_price sup {
            font-size: 18px;
        }
        
        .button {
            margin: 0 5px;

            &:hover {
                background: #f7544a;
                color: #fff;
            }
        }
    }

    .list_bottom {
        position: relative;
        width: 100%;
        padding-top: 10px;
        .button_group {
            width: auto;
        }
    }

    .favorite {
        color: #ff3636;
    }
    .button{
        background: #fff;
        padding: 10px 20px;
        border: 1px solid #cccccc;
        font-size: 14px;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        outline: none;
    }
`;
class ProductItemHorizonto extends Component {
    render() {
        return (
            <Container className="products">
                <div className="thumbnail">
                    <a href="/product/detail"><img src={image01} alt="Product Name" /></a>
                </div>
                <div className="product-list-description">
                    <div className="productname">Lincoln Corner Unit Products</div>
                    
                    <p>Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultri ces posuere cubilia curae. Proin lectus ipsum, gravida etds mattis vulputate, tristique ut lectus. Sed et lorem nunc...</p>
                    <div className="list_bottom">
                        <div className="price">
                            <span className="new_price">450.00<sup>$</sup></span>
                        </div>
                        <div className="button_group">
                            <button className="button">Add To Cart</button>
                            <button className="button favorite"><i className="fa fa-heart-o"></i></button>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default ProductItemHorizonto;