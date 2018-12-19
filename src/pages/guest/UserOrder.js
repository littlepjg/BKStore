import React, { Component } from 'react';
import styled from 'styled-components';
import UserBill from '../../components/guest/bill/UserBill';

const Container = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;

class UserOrder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="container" role="tabpanel">
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active">
                        <a href="#order" aria-controls="home" role="tab" data-toggle="tab">Đơn hàng của tôi</a>
                    </li>
                    <li role="presentation">
                        <a href="#order-recived" aria-controls="tab" role="tab" data-toggle="tab">Đơn hàng đã nhận</a>
                    </li>
                    <li role="presentation">
                        <a href="#order-cancel" aria-controls="tab" role="tab" data-toggle="tab">Đơn hàng đã hủy</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="order">
                        <UserBill bill={{ id: 1 }} />
                        <UserBill bill={{ id: 2 }} />
                    </div>
                    <div role="tabpanel" className="tab-pane" id="order-recived">
                        <UserBill bill={{ id: 3 }} />
                        <UserBill bill={{ id: 4 }} />
                        <UserBill bill={{ id: 5 }} />
                    </div>
                    <div role="tabpanel" className="tab-pane" id="order-cancel">
                        <UserBill bill={{ id: 6 }} />
                        <UserBill bill={{ id: 7 }} />
                    </div>
                </div>
            </Container>
        )
    }
}

export default UserOrder;