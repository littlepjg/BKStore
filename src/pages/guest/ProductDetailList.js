import React, { Component } from 'react';
import BrandList from '../../components/guest/brand/BrandList';
import BreadCrumb from '../../components/guest/BreadCrumb';
import ProductsView from '../../components/guest/product/ProductsView';

class ProductDetailList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <BreadCrumb />
                <ProductsView/>
                <BrandList />
            </div>
        );
    }
}

export default ProductDetailList;