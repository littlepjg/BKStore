import React, { Component } from 'react';
import ProductItem from '../../components/guest/product/ProductItem';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Profile</h1>
                <div className="row">
                    <div className="col-md-3">
                        <ProductItem />
                    </div>
                    <div className="col-md-3">
                        <ProductItem />
                    </div>
                    <div className="col-md-3">
                        <ProductItem />
                    </div>
                    <div className="col-md-3">
                        <ProductItem />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;