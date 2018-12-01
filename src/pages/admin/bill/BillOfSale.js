import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

import "react-datepicker/dist/react-datepicker.css";

import { TitlePanel, WhitePanel } from '../../../theme/Style';
import BillRow from '../../../components/admin/bill/BillRow';
import Pagination from '../../../components/pagination/Pagination';

const Label = styled.label`
    display: block;
`;

const SearchForm = styled.form`
    max-width: 300px;
    display: flex;

    input {
        padding: 0 8px 0 8px;
        border-radius: 1px;
    }

    button {
        border-radius: 1px;
    }
`;

class BillOfSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            billTypeSelected: '1',
            startDate: new Date(),
            endDate: new Date(),
            searchValue: ''
        }
        this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
        this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
        this.handleChangeBillType = this.handleChangeBillType.bind(this);
        this.getPrevPage = this.getPrevPage.bind(this);
        this.getNextPage = this.getNextPage.bind(this);
    }

    handleChangeStartDate(date) {
        this.setState(prevState => {
            if (date <= prevState.endDate) {
                return {
                    startDate: date
                }
            }
        });
    }

    handleChangeEndDate(date) {
        this.setState(prevState => {
            if (date >= prevState.startDate && (date <= new Date())) {
                return {
                    endDate: date
                }
            }
        });
    }

    handleChangeBillType(e) {
        this.setState({
            billTypeSelected: e.target.value
        });
    }

    getPrevPage() {

    }

    getNextPage() {

    }

    render() {
        const { billTypeSelected, startDate, endDate, searchValue } = this.state;
        const bills = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        const currentPage = 1, totalBill = 10, noPerPage = 10;

        return (
            <div>
                <TitlePanel>
                    <h3>Quản lý đơn hàng</h3>
                </TitlePanel>

                <WhitePanel>
                    <div className="row" style={{ display: 'flex', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <Label htmlFor="">Từ</Label>
                                    <div className="form-group">
                                        <DatePicker className="form-control" selected={startDate} onChange={this.handleChangeStartDate} />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-6">
                                    <Label htmlFor="">Đến</Label>
                                    <div className="form-group">
                                        <DatePicker className="form-control" selected={endDate} onChange={this.handleChangeEndDate} />
                                    </div>
                                </div>
                            </div>

                            <div className="row" style={{ display: 'flex', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                                <div className="col-xs-8 col-sm-7">
                                    <Label htmlFor="product-type">Đơn hàng</Label>
                                    <select name="product_type_id" id="product-type" className="form-control"
                                        value={billTypeSelected} onChange={this.handleChangeBillType}>
                                        <option value="1">Tất cả</option>
                                        <option value="2">Đang giao hàng</option>
                                        <option value="3">Đã giao hàng</option>
                                        <option value="4">Đổi trả</option>
                                    </select>
                                </div>

                                <div className="col-xs-4 col-sm-5" style={{ marginTop: 10 }}>
                                    <button type="button" className="btn btn-success">Lọc</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6" style={{ height: '100%', marginTop: 15 }}>
                            <SearchForm onSubmit={event => this.handleSubmit(event)}>
                                <input type="text" className="form-control" placeholder="Tìm kiếm đơn hàng"
                                    value={searchValue} onChange={(e) => this.setState({ searchValue: e.target.value })} />
                                <button type="submit" className="btn btn-primary"><i class="fa fa-search"></i></button>
                            </SearchForm>
                        </div>
                    </div>

                    {/* table bills */}
                    <div className="table-responsive" style={{ marginTop: 35 }}>
                        <table className="table table-bordered table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã KH</th>
                                    <th>Mã NV</th>
                                    <th>Địa chỉ</th>
                                    <th>Ngày đặt</th>
                                    <th>Ngày nhận</th>
                                    <th>Phí ship</th>
                                    <th>Giá trị đơn hàng</th>
                                    <th>Trạng thái</th>
                                    <th>Hoạt động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bills.map((bill, index) => <BillRow key={index} />)}
                            </tbody>
                        </table>
                    </div>

                    <Pagination currentPage={currentPage} total={totalBill} noPerPage={noPerPage}
                        getPrevPage={this.getPrevPage} getNextPage={this.getNextPage} />
                </WhitePanel>
            </div>
        )
    }
}

export default BillOfSale;