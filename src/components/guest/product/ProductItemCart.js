import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

class ProductItemCart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <div id="product_item_cart">
                    <div className="container">
                        <div className="col-sm-8">
                            <div className="col-sm-6">
                                <div className="product">

                                </div>
                            </div>
                            <div className="col-sm-3">
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default ProductItemCart;
