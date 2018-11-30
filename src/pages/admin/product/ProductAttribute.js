import React, { Component } from 'react';
import { WhitePanel } from '../../../theme/Style';

class ProductAttribute extends Component {
    render() {
        return (
            <div>
                <h1>Product attributes</h1>
                <WhitePanel className="container-fluid">
                    <div className="row col-md-5">
                        <div className="row" style={{ display: "flex", alignItems: "flex-end", marginBottom: "30px" }}>
                            <div className="col-xs-12 col-sm-6">
                                <label htmlFor="product-type">Product Type</label>
                                <select name="product_type_id" id="product-type" className="form-control">
                                    <option value="1">Máy tính</option>
                                    <option value="2">Điện thoại</option>
                                </select>
                            </div>
                            <div className="col-sm-4 col-sm-push-1">
                                <button type="button" className="btn btn-success">Add product type</button>
                            </div>
                        </div>

                        <div className="row" style={{ display: "flex", alignItems: "flex-end", marginBottom: "30px" }}>
                            <div className="col-xs-12 col-sm-6">
                                <label htmlFor="product-type">Providers</label>
                                <select name="product_type_id" id="product-type" className="form-control">
                                    <option value="1">Oppo</option>
                                    <option value="2">Samsung</option>
                                </select>
                            </div>
                            <div className="col-sm-4 col-sm-push-1">
                                <button type="button" className="btn btn-success">Add product type</button>
                            </div>
                        </div>
                    </div>
                    <div className="row col-md-6 col-md-push-1">
                        <label htmlFor="product-type">Product attributes</label>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <colgroup>
                                    <col style={{ color: "#4f4f4f", fontWeight: "500", background: "#efefef" }} />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td>Bộ nhớ trong</td>
                                    </tr>
                                    <tr>
                                        <td>Ram</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </WhitePanel>
            </div>
        );
    }
}

export default ProductAttribute;