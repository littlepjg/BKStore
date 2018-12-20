import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;

    img {
        height: 90px;
        width: 90px;
    }

    div > h4 {
        margin: 0;
    }

    div > p {
        color: #f57224;
        margin-top: 5px;
    }
`;

class BillProductItem extends Component {
    render() {
        return (
            <Container className="col-md-6">
                <img src="//vn-test-11.slatic.net/original/37bbbc9c8bf093781e0708af287730a7.jpg" alt="dddd" />
                <div>
                    <h4>Samsung Galaxy A8 32GB RAM 4GB 5.6inch - Hãng phân phối chính thức</h4>
                    <p>7.990.000 VNĐ</p>
                </div>
            </Container>
        );
    }
}

export default BillProductItem;