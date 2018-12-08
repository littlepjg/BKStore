import React, { Component } from 'react';
import styled from 'styled-components';

import { TitlePanel, WhitePanel } from '../../../theme/Style';
import ProductATRow from '../../../components/admin/product/ProductATRow';

const TableContainer = styled.div`
    height: 350px;
    overflow-y: scroll;
`;

class ProductAttribute extends Component {
    render() {
        const attTypes = [1, 1, 1, 1, 1, 1, 1];

        return (
            <div>
                <TitlePanel>
                    <h3>Thuộc tính sản phẩm</h3>
                </TitlePanel>

                <WhitePanel className="container-fluid">
                    <div className="row col-md-6">
                        <div className="row" style={{ marginBottom: "15px" }}>
                            <div className="col-xs-12 col-sm-6">
                                <label htmlFor="product-type">Loại sản phẩm</label>
                                <select name="product_type_id" id="product-type" className="form-control">
                                    <option value="1">Máy tính</option>
                                    <option value="2">Điện thoại</option>
                                </select>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-5 col-sm-6" style={{ marginBottom: "15px" }}>
                                <input type="text" className="form-control" placeholder="Loại sản phẩm" />
                            </div>

                            <div class="col-xs-6 col-sm-6" style={{ marginBottom: "15px" }}>
                                <button type="button" className="btn btn-success">Thêm mới</button>
                            </div>
                        </div>


                        <div className="row" style={{ display: "flex", alignItems: "flex-end", marginBottom: "30px" }}>
                            <div className="col-xs-12 col-sm-6">
                                <label htmlFor="product-type">Thuộc tính</label>
                                <input type="text" className="form-control" placeholder="Thuộc tính sản phẩm" />
                            </div>
                            <div className="col-sm-6">
                                <button type="button" className="btn btn-success">Thêm mới</button>
                            </div>
                        </div>


                        <div class="row">
                            <div className="col-xs-12">
                                <label htmlFor="product-type">Danh mục thuộc tính</label>
                                <TableContainer className="table-responsive">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Tên thuộc tính</th>
                                                <th>Hoạt động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {attTypes.map((att, i) => <ProductATRow key={i} action={1} />)}
                                        </tbody>
                                    </table>
                                </TableContainer>
                            </div>
                        </div>
                    </div>

                    <div className="row col-md-6 col-md-push-1">
                        <label htmlFor="product-type">Thuộc tính sản phẩm</label>
                        <TableContainer className="table-responsive">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên thuộc tính</th>
                                        <th>Hoạt động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {attTypes.map((att, i) => <ProductATRow key={i} action={2} />)}
                                </tbody>
                            </table>
                        </TableContainer>
                    </div>
                </WhitePanel>
            </div>
        );
    }
}

export default ProductAttribute;