import React, { Component } from 'react';
import styled from 'styled-components';
import BillProductItem from './BillProductItem';

const Container = styled.div`
    border: 1px solid #f57224;
    margin: 10px 0;
    padding: 5px 20px;
    cursor: pointer;

    .bill-detail {
        border-top: 1px solid #f57224;
        padding-top: 5px;
    }
`;

class UserBill extends Component {
    render() {
        const { bill } = this.props;
        return (
            <Container>
                <div data-toggle="collapse" data-target={`#bill-detail-${bill.id}`}>
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <p>Khách hàng: </p>
                            <p>Nhân viên giao hàng: </p>
                            <p>Giá trị đơn hàng: </p>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <p>Ngày đặt</p>
                            <p>Ngày giao</p>
                        </div>
                    </div>
                </div>

                <div id={`bill-detail-${bill.id}`} class="collapse bill-detail">
                    <div class="row">
                        <BillProductItem />
                        <BillProductItem />
                        <BillProductItem />
                        <BillProductItem />
                        <BillProductItem />
                    </div>
                </div>
            </Container>
        );
    }
}

export default UserBill;