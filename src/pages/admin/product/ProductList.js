import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../../../actions/admin_product_actions';

import { TitlePanel, WhitePanel, Label } from '../../../theme/Style';
import ProductRow from '../../../components/admin/product/ProductRow';
import Pagination from '../../../components/pagination/Pagination';

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

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            providers: [{ id: 1, name: "Sam sung" }, { id: 2, name: "Oppo" }],
            productTypes: [{ id: 1, name: "Điện thoại" }, { id: 2, name: "Máy tính" }]
        }
        this.handleChangeProductNum = this.handleChangeProductNum.bind(this);
        this.handleChangeFilter = this.handleChangeFilter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getPrevPage = this.getPrevPage.bind(this);
        this.getNextPage = this.getNextPage.bind(this);
    }

    componentDidMount() {
        const ROOT_URL = 'http://localhost:5000';

        // get provider
        axios.get(`${ROOT_URL}/admin/provider`).then(response => {
            const { success, error } = response.data;
            if (success) {
                const { providers } = response.data;
                this.setState({
                    providers
                });
            } else {
                console.log("error: Dữ liệu provider trống");
            }
        }).catch(err => {
            console.log(err);
        });

        // get product type
        axios.get(`${ROOT_URL}/admin/product_type`).then(response => {
            const { success, error } = response.data;
            if (success) {
                const { productTypes } = response.data;
                this.setState({
                    productTypes
                })
            } else {
                console.log("error: Dữ liệu product type trống");
            }
        }).catch(err => {
            console.log(err);
        });

        const { pager: { limit, currentPageNum }, searchValue, filter } = this.props.productList;
        this.props.getPostsAdminByPage(limit, currentPageNum, searchValue, filter);
    }

    handleChangeFilter(e) {
        const { searchValue, filter, pager: { limit } } = this.props.productList;
        filter[e.target.name] = parseInt(e.target.value);
        this.props.getPostsAdminByPage(limit, 1, searchValue, filter);
    }

    handleChangeProductNum(e) {
        const limit = parseInt(e.target.value);
        const { searchValue, filter } = this.props.productList;
        this.props.getPostsAdminByPage(limit, 1, searchValue, filter);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { filter, pager: { limit } } = this.props.productList;
        this.props.getPostsAdminByPage(limit, 1, this.state.searchValue, filter);
    }

    getPrevPage() {
        const { pager: { limit, prevPageNum }, searchValue, filter } = this.props.productList;
        this.props.getPostsAdminByPage(limit, prevPageNum, searchValue, filter);
    }

    getNextPage() {
        const { pager: { limit, nextPageNum }, searchValue, filter } = this.props.productList;
        this.props.getPostsAdminByPage(limit, nextPageNum, searchValue, filter);
    }

    render() {
        const { searchValue, providers, productTypes } = this.state;
        const { products, pager, filter, error } = this.props.productList;

        return (
            <div>
                <TitlePanel>
                    <h3>Danh sách sản phẩm</h3>
                </TitlePanel>

                <WhitePanel>
                    <div className="row">
                        <div className="col-md-12">
                            <NavLink to="/admin/product/add" className="btn btn-success pull-right">Thêm mới</NavLink>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-xs-12 col-sm-8">
                                    <Label htmlFor="product-type">Loại sản phẩm</Label>
                                    <select name="product_type" id="product-type" className="form-control"
                                        value={filter.product_type} onChange={this.handleChangeFilter}>
                                        <option value="0">Tất cả</option>
                                        {productTypes.map(productType => <option key={productType.id} value={`${productType.id}`}>{productType.name}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 col-sm-8">
                                    <Label htmlFor="product-type">Thương hiệu</Label>
                                    <select name="provider" id="product-type" className="form-control"
                                        value={filter.provider} onChange={this.handleChangeFilter}>
                                        <option value="0">Tất cả</option>
                                        {providers.map(provider => <option key={provider.id} value={`${provider.id}`}>{provider.name}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-xs-12 col-sm-8">
                                    <Label htmlFor="product-type">Hiển thị</Label>
                                    <select name="product_num" id="product-type" className="form-control"
                                        value={pager.limit} onChange={this.handleChangeProductNum}>
                                        <option value="10">10 hàng</option>
                                        <option value="15">15 hàng</option>
                                        <option value="20">20 hàng</option>
                                        <option value="35">35 hàng</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row" style={{ height: '100%', marginTop: 15 }}>
                                <div className="col-xs-12 col-sm-8">
                                    <SearchForm onSubmit={event => this.handleSubmit(event)}>
                                        <input type="text" className="form-control" placeholder="Tìm kiếm sản phẩm"
                                            value={searchValue} onChange={(e) => this.setState({ searchValue: e.target.value })} />
                                        <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                    </SearchForm>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* table products */}
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
                                {products.map((product, index) => <ProductRow key={product.id} pos={pager.offset + index + 1} productInfo={product} />)}
                            </tbody>
                        </table>
                    </div>

                    <Pagination currentPage={pager.currentPageNum} total={pager.totalCount} noPerPage={pager.limit}
                        getPrevPage={this.getPrevPage} getNextPage={this.getNextPage} />
                </WhitePanel>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        productList: state.admin.product.productList
    }
}

export default connect(mapStateToProps, actions)(ProductList);