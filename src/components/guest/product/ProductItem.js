import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import logo from './products-01.png';

const Container = styled.div`
    border: 1px solid #e1e1e1;
    min-height: 400px;
    position: relative;
    overflow: hidden;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #fff;
    margin-bottom: 15px

    &:hover {
        background: #fff;
        border-color: #f7544a;
        -webkit-box-shadow: 0 0 5px 1px #d3d3d3;
        box-shadow: 0 0 5px 1px #d3d3d3;
    }

    .thumbnail {
        float: left;
        position: relative;
        width: 100%;
        margin: 45px 0 5px 0;
        padding: 0;
        height: 230px;
        border: none;
        text-align: center;
    }
    
    .productname {
        float: left;
        width: 100%;
        text-align: center;
        font-size: 16px;
        color: #2f2f2f;
        margin-bottom: 10px;
        color: #333333;
    }

    .price {
        float: left;
        width: 100%;
        color: #ff1e2c;
        text-align: center;
        font-weight: 500;
        margin-bottom: 15px;
        font-size: 20px;
        line-height: 24px;
    }

    .button_group {
        margin-bottom: 10px;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        .button {
            margin: 0 3px 5px 3px;
            border-radius: 10px;
            transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
            border: 1px solid #cccccc;
            background: #ffffff;
            &:hover {
                background: #f7544a;
                color: #fff;
                border: 1px solid #fe5252;
                .fa {
                    color: #fff;
                }
            }
            .fa {
                color: #f7544a;
            }
        }

        .add-cart {
            padding: 9px 30px;
        }

        .wishlist {
            padding: 2px 10px;
            font-size: 24px;
        }
    }
}
`;

class ProductItem extends Component {
    render() {
        return (
            <Container className="products">
                <div className="thumbnail">
                    <NavLink to="/product/detail/1"><img src={logo} alt="Product Name" /></NavLink>
                </div>
                <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                <h4 className="price">$451.00</h4>
                <div className="button_group">
                    <button className="button add-cart" type="button">Add To Cart</button>
                    <button className="button wishlist" type="button"><i className="fa fa-heart-o"></i></button>
                </div>
            </Container>
        )
    }
}

export default ProductItem;