import React, { Component } from 'react';
import styled from 'styled-components';

const ROOT_URL = 'http://localhost:5000';

const Container = styled.div`
    padding: 5px 15px;
    box-shadow: 0px 0px 1px 1px #F1F1F1;
    img {
        width: 100px;
    }
`;

class TopProductItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { product } = this.props;
        const image = product.product_images.split(',')[0];
        return (
            <Container className="col-md-6">
                <div>
                    <img src={image.indexOf('upload') === 0 ? `${ROOT_URL}/photos/${image}` : image} alt="Product Name" />
                </div>
                <div>{product.product_name}</div>
                <h4>{product.base_price} VNĐ</h4>
                <div>
                    <p>Số lượng còn lại: {product.quantity}</p>
                    <p>Số lượng bán ra: {product.count}</p>
                </div>
            </Container>
        )
    }
}

export default TopProductItem;