import React, { Component } from 'react';
import styed from 'styled-components';
import ProductItem from './ProductItem';

const Container = styed.div`
    float: left;
    width: 100%;
    position: relative;
    padding: 15px 10px 0 10px;
    margin: 0;
    .pagination{
        position: absolute;
        right: 10px;
        top: 10px;
    }
`;

class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            products: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            currentPage: 1,
            limitPage: 4,
        }
        this.handlerClick = this.handlerClick.bind(this);
    }
    handlerClick(pageNum) {
        console.log(pageNum);

        this.setState({
            currentPage: pageNum,
        })
    }
    pageItem(pageNum, key) {
        const { currentPage } = this.state;

        if (typeof pageNum === 'number') {
            return pageNum !== currentPage
                ? (<li key={key} id={pageNum} onClick={() => this.handlerClick(pageNum)}><a href="#">{pageNum}</a></li>)
                : (<li key={key} id={pageNum} onClick={() => this.handlerClick(pageNum)} className="active"><a href="#">{pageNum}</a></li>);
        }
        return <li key={key} id={pageNum} onClick={() => this.handlerClick(pageNum)} className="disabled"><a href="#">{pageNum}</a></li>;
    }
    pagination(countPages, currentPage) {
        let c = currentPage > 0 ? currentPage : 1,
            last = countPages,
            delta = 2,
            left = c - delta,
            right = c + delta + 1,
            temp = 0,
            range = [],
            rangeWithDots = [];

        for (let i = 1; i <= last; i++) {
            if (i === 1 || i === last || (i >= left && i < right)) range.push(i);
        }

        for (const i of range) {
            if (temp) {
                //check push 2, n-1
                if (i - temp === 2) {
                    rangeWithDots.push(temp + 1);
                } else if (i - temp !== 1) {
                    //i-l > 2
                    rangeWithDots.push('...');
                }

            }
            rangeWithDots.push(i);
            temp = i;
        }
        console.log('current', c);
        console.log('count', countPages);
        console.log('range', range);
        console.log('rangewithdots', rangeWithDots);

        return rangeWithDots;
    }
    nextPage() {
        const { currentPage, limitPage, products } = this.state;
        const countPages = Math.ceil(products.length / limitPage);

        if (currentPage < countPages) {
            this.setState({
                currentPage: currentPage + 1
            });
        }
    }

    prevPage() {
        const { currentPage } = this.state;

        if (currentPage > 1) {
            this.setState({
                currentPage: currentPage - 1
            });
        }
    }
    render() {
        const {
            products,
            currentPage,
            limitPage,
        } = this.state;

        const indexOfLastProduct = currentPage * limitPage;
        const indexOfFirstProduct = indexOfLastProduct - limitPage;
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

        const renderProducts = currentProducts.map((product, index) => {
            return (
                <div key={index} className="col-md-3">
                    <ProductItem key={index} data={product} />
                </div>
            );
        });
        const countPages = Math.ceil(products.length / limitPage);

        return (
            <Container className="products-list">
                <h3 className="title"><strong> {this.props.productListName}</strong></h3>
                <div class="row">
                    <ul className="pagination">
                        <li className="left" onClick={() => this.prevPage()}><span className="glyphicon glyphicon-chevron-left"></span></li>
                        {
                            this.pagination(countPages, currentPage).map((pageNum, key) => this.pageItem(pageNum, key))
                        }
                        <li className="right" onClick={() => this.nextPage()}><span className="glyphicon glyphicon-chevron-right"></span></li>
                    </ul>
                </div>
                <div className="row">
                    {renderProducts}
                </div>
            </Container>
        );
    }
}

export default ProductList;