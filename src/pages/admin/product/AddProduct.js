import React, { Component } from 'react';
import CKEditor from 'react-ckeditor-wrapper';
import styled from 'styled-components';

import { TitlePanel, WhitePanel } from '../../../theme/Style';
import BackButton from '../../../components/BackButton';
import SelectImage from '../../../components/admin/product/SelectImage';

const GenaralIfo = styled.div`
    .row {
        margin-bottom: 10px;
    }
`;

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ''
        }
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
    }

    handleChangeDescription(description) {
        this.setState({
            description
        });
    }

    render() {
        const { description } = this.state;
        return (
            <div>
                <BackButton />
                <TitlePanel>
                    <h3>Thêm sản phẩm</h3>
                </TitlePanel>
                <WhitePanel className="container-fluid">
                    <div className="row">
                        <GenaralIfo className="col-md-6">
                            <form action="" method="POST" role="form">
                                <legend>General Information</legend>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" name="product_name" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-6">
                                        <label htmlFor="product-type">Product Type</label>
                                        <select name="product_type_id" id="product-type" className="form-control">
                                            <option value="1">Máy tính</option>
                                            <option value="2">Điện thoại</option>
                                        </select>
                                    </div>

                                    <div className="col-xs-8 col-sm-4">
                                        <label htmlFor="quantity">Quantity</label>
                                        <input type="number" className="form-control" id="quantity" name="quantity"
                                            defaultValue="0" min="0" />
                                    </div>
                                </div>

                                <div className="row" style={{ position: "relative" }}>
                                    <div className="col-xs-12 col-sm-6">
                                        <label htmlFor="product-type">Product Attributes</label>
                                        <select name="product_attributes" id="product-type" className="form-control">
                                            <option value="1">CPU</option>
                                            <option value="2">Bộ nhớ</option>
                                            <option value="2">RAM</option>
                                        </select>
                                    </div>

                                    <div className="col-xs-8 col-sm-4">
                                        <label htmlFor="quantity">Value</label>
                                        <input type="text" className="form-control" id="attribute_value" name="attribute_value"
                                            defaultValue="0" min="0" />
                                    </div>

                                    <div className="col-xs-4 col-sm-2" style={{ position: "absolute", bottom: "0px", right: "0px" }}>
                                        <button type="button" className="btn btn-success">Add</button>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-8 col-sm-6">
                                        <label htmlFor="price">Price</label>
                                        <input type="text" className="form-control" id="price" name="base_price" />
                                    </div>

                                    <div className="col-xs-8 col-sm-4">
                                        <label htmlFor="unit">Unit</label>
                                        <select name="unit" id="unit" className="form-control">
                                            <option value="VND">VND</option>
                                            <option value="$">$</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row" style={{ display: "flex", alignItems: "flex-end" }}>
                                    <div className="col-xs-8 col-sm-4">
                                        <label htmlFor="provider">Provider</label>
                                        <select name="provider_id" id="provider" className="form-control">
                                            <option value="1">Samsung</option>
                                            <option value="2">Oppo</option>
                                        </select>
                                    </div>

                                    <div className="col-xs-8 col-sm-4">
                                        <button type="button" className="btn btn-success">Add Provider</button>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <label>Description</label>
                                        <CKEditor value={description}
                                            onChange={this.handleChangeDescription}
                                            config={{ extraAllowedContent: 'div(*); p(*); strong(*);' }} />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary">Add</button>
                            </form>
                        </GenaralIfo>

                        <SelectImage />
                    </div>
                </WhitePanel>
            </div>
        );
    }
}

export default AddProduct;