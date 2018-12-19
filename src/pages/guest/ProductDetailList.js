import React, { Component } from 'react';
import BrandList from '../../components/guest/brand/BrandList';
import BreadCrumb from '../../components/guest/BreadCrumb';
import ProductsView from '../../components/guest/product/ProductsView';
import BottomHeader from '../../components/guest/BottomHeader';

import axios from 'axios';

class ProductDetailList extends Component {
    constructor(props){
        super(props);
        this.state = {
            product_type_id: props.match.params.product_type_id,
            products: [],
        }
    }
    componentDidMount(){
        const ROOT_URL = 'http://localhost:5000';
        const product_type_id = this.props.match.params.product_type_id;
        // get provider
        axios.get(`${ROOT_URL}/guest/productlist`,{product_type_id}).then(response => {
            const { success, error } = response.data;
            if (success) {
                const { products } = response.data;
                this.setState({
                    products
                });
            } else {
                console.log("error: Dữ liệu provider trống");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        console.log(this.state.product_type_id);
        console.log(this.state.products);
        
        
        return (
            <div className="container-fluid">
                <div class="row">
                    <BottomHeader/>
                </div>
                
                <BreadCrumb />
                <ProductsView products={this.state.products}/>
                <BrandList />
            </div>
        );
    }
}

export default ProductDetailList;