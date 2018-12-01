import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { TitlePanel, WhitePanel } from '../../../theme/Style';
import ProductRow from '../../../components/admin/product/ProductRow';
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

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productNum: 10,
            searchValue: ''
        }
        this.handleChangeProductNum = this.handleChangeProductNum.bind(this);
        this.getPrevPage = this.getPrevPage.bind(this);
        this.getNextPage = this.getNextPage.bind(this);
    }

    handleChangeProductNum(e) {
        this.setState({
            productNum: parseInt(e.target.value)
        });
    }

    getPrevPage() {

    }

    getNextPage() {

    }

    render() {
        const { productNum, searchValue } = this.state;
        const bills = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        const currentPage = 1, totalBill = 10, noPerPage = 10;

        return (
            <div>
                <TitlePanel>
                    <h3>Danh sách sản phẩm</h3>
                </TitlePanel>

                <WhitePanel>
                    <div class="row">
                        <div className="col-md-12">
                            <NavLink to="/admin/product/add" className="btn btn-success pull-right">Thêm mới</NavLink>
                        </div>
                    </div>

                    <div className="row" style={{ display: 'flex', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-xs-8 col-sm-7">
                                    <Label htmlFor="product-type">Hiển thị</Label>
                                    <select name="product_num" id="product-type" className="form-control"
                                        value={productNum} onChange={this.handleChangeProductNum}>
                                        <option value="10">10 hàng</option>
                                        <option value="15">15 hàng</option>
                                        <option value="20">20 hàng</option>
                                        <option value="35">35 hàng</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6" style={{ height: '100%', marginTop: 15 }}>
                            <SearchForm onSubmit={event => this.handleSubmit(event)}>
                                <input type="text" className="form-control" placeholder="Tìm kiếm sản phẩm"
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
                                    <th>Mã SP</th>
                                    <th>Tên SP</th>
                                    <th>Đơn giá</th>
                                    <th>Đơn vị</th>
                                    <th>Loại SP</th>
                                    <th>Thương hiệu</th>
                                    <th>Số lượng</th>
                                    <th>Hoạt động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bills.map((bill, index) => <ProductRow key={index} />)}
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

export default Product;