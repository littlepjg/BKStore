import React, { Component } from 'react';
import styled from 'styled-components';

import { TitlePanel, WhitePanel } from '../../../theme/Style';
import BillDetailRow from '../../../components/admin/bill/BillDetailRow';
import ViewProductImages from '../../../components/admin/bill/ViewProductImages';
import BackButton from '../../../components/BackButton';

const Container = styled.div`
    h4 {
        font-size: 20px;
    }
    p {
        font-size: 15px;
    }
    .title {
        font-weight: bold;
    }
    p.bill-info {
        max-width: 235px;
        display: flex;
        justify-content: space-between;

        .content {
            color: #f57224;
        }
    }
`;

const ContainerInfo = styled.div`
   .detail {
    padding: 10px 20px;
   }
    > h4 {
        width: max-content;
        margin: auto;
    }
`;

class BillDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.handleVisibleProductImages = this.handleVisibleProductImages.bind(this);
        this.handleHideViewImages = this.handleHideViewImages.bind(this);
    }

    handleVisibleProductImages() {
        this.setState({ visible: true });
    }

    handleHideViewImages() {
        this.setState({ visible: false });
    }

    render() {
        const bills = [1, 1, 1, 1, 1];
        const { visible } = this.state;

        return (
            <Container>
                <BackButton />
                <TitlePanel>
                    <h3>Chi tiết đơn hàng</h3>
                </TitlePanel>

                <WhitePanel>
                    <div className="row">
                        <div className="row">
                            {/* customer info */}
                            <ContainerInfo className="col-xs-12 col-sm-6">
                                <h4>Thông tin khách hàng</h4>
                                <div className="row detail">
                                    <div className="col-xs-12 col-sm-6">
                                        <p><span className="title">Mã KH:</span> <span className="content">KH001</span></p>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <p><span className="title">Họ tên:</span> <span className="content">Nguyễn Thị Hoa</span></p>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <p><span className="title">Số điện thoại:</span> <span className="content">0123456789</span></p>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <p><span className="title">Địa chỉ nhận:</span> <span className="content">Tiền Yên, Hoài Đức, Hà Nội</span></p>
                                    </div>
                                </div>
                            </ContainerInfo>

                            {/* employee info */}
                            <ContainerInfo className="col-xs-12 col-sm-6">
                                <h4>Thông tin nhân viên</h4>
                                <div className="row detail">
                                    <div className="col-xs-12 col-sm-6">
                                        <p><span className="title">Mã NV:</span> <span className="content">SP001</span></p>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <p><span className="title">Họ tên:</span> <span className="content">Phạm Văn Duy</span></p>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <p><span className="title">Số điện thoại:</span> <span className="content">0123456789</span></p>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <p><span className="title">Địa chỉ:</span> <span className="content">Tiền Yên, Hoài Đức, Hà Nội</span></p>
                                    </div>
                                </div>
                            </ContainerInfo>
                        </div>
                    </div>

                    {/* Tổng quan sản phẩm */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h4>Thông tin đơn hàng</h4>
                            <p className="bill-info"><span className="title">Giá trị đơn hàng:</span> <span className="content">500000 VNĐ</span></p>
                            <p className="bill-info"><span className="title">Phí giao hàng:</span> <span className="content">50000 VNĐ</span></p>
                            <p className="bill-info"><span className="title">Tổng cộng:</span> <span className="content">550000 VNĐ</span></p>
                        </div>
                    </div>


                    {/* table bills */}
                    <div className="table-responsive" style={{ marginTop: 35 }}>
                        <table className="table table-bordered table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã SP</th>
                                    <th>Tên SP</th>
                                    <th>Đơn giá</th>
                                    <th>Đơn vị</th>
                                    <th>Số lượng</th>
                                    <th>Đã nhận</th>
                                    <th>Hoạt động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bills.map((bill, index) => <BillDetailRow key={index} handleVisibleProductImages={this.handleVisibleProductImages} />)}
                            </tbody>
                        </table>
                    </div>
                </WhitePanel>
                {visible && <ViewProductImages handleHideViewImages={this.handleHideViewImages} visible={visible} />}
            </Container>
        )
    }
}

export default BillDetail;