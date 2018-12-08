import React, { Component } from 'react';
import BrandList from '../../components/guest/brand/BrandList';
import BreadCrumb from '../../components/guest/BreadCrumb';
import ProductsView from '../../components/guest/product/ProductsView';
import BottomHeader from '../../components/guest/BottomHeader';

class ProductDetailList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div class="row">
                    <BottomHeader/>
                </div>
                
                <BreadCrumb />
                <ProductsView/>
                <BrandList />
            </div>
        );
    }
}

export default ProductDetailList;