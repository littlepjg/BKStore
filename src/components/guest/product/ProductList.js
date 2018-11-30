import React, { Component } from 'react';
import styed from 'styled-components';
import ProductItem from './ProductItem';
// import left from './images/arrow_left.png';
// import right from './images/arrow_right.png';

const Container = styed.div`
    float: left;
    width: 100%;
    position: relative;
    padding: 15px 10px 0 10px;
    margin: 0;
    #list{
        margin: 0;
        padding: 0;
        display: block;
        float: left;
        width: 100%;
    }
    #list li{
        float: left;
        width: 100%;
        padding: 0;
        margin: 0;
        display: inline;
    }

    .control {
        position: absolute;
        right: 0;
        top: 20px;
        background: #fff;
    }
    .caroufredsel_wrapper {
        min-height: 1650px;
    }
    .control .next {
        margin-left: 15px;
        margin-right: 15px;
        float: left;
        width: 14px;
        height: 20px;
        font-size: 20px;
        text-decoration: none;
        background: url("./images/arow_right.png") left top no-repeat;
        &:hover {
            background-position: left bottom;
        }
    }

    .control .prev{
        display: block;
        float: left;
        width: 14px;
        height: 20px;
        font-size: 20px;
        text-decoration: none;
        background: url() left top no-repeat;

        &:hover {
            background-position: left bottom;
        }
    }
`;
class ProductList extends Component {
    render() {
        return (
            <Container className="products-list">
                <h3 className="title"><strong> Điện thoại di động</strong></h3>
                <div className="control">
                    <a id="prev_product" className="prev glyphicon glyphicon-chevron-left" href="/" style={{ display: 'block' }}></a>
                    <a id="next_product" className="next glyphicon glyphicon-chevron-right" href="/" style={{ display: 'block' }}></a>
                </div>
                <div className="caroufredsel_wrapper" style={{ display: 'block', textAlign: 'start', float: 'left', position: 'relative', top: 'auto', right: 'auto', bottom: 'auto', left: 'auto', zIndex: 'auto', width: 1140, height: 419, margin: 0, overflow: 'hidden' }}>
                    <ul id="list" style={{ textAlign: 'left', float: 'none', position: 'absolute', top: 0, right: 'auto', bottom: 'auto', left: 0, margin: 0, width: 5700, height: 419 }}>
                        <li style={{ width: 1140 }}>
                            <div className="row">
                                <div className="col-md-3">
                                    <ProductItem />
                                </div>
                                <div className="col-md-3">
                                    <ProductItem /></div>
                                <div className="col-md-3">
                                    <ProductItem />
                                </div>
                                <div className="col-md-3">
                                    <ProductItem />
                                </div>
                            </div>
                        </li>
                        <li style={{ width: 1140 }}>
                            <div className="row">
                                <div className="col-md-3">
                                    <ProductItem />
                                </div>
                                <div className="col-md-3">
                                    <ProductItem /></div>
                                <div className="col-md-3">
                                    <ProductItem />
                                </div>
                                <div className="col-md-3">
                                    <ProductItem />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Container>
        );
    }
}

export default ProductList;