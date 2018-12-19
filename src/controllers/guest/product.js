const express = require("express");
const product_md = require('../../models/productModel');
const route = express.Router();

route.get('/:product_type_id', (req, res) => {
    const product_type_id = parseInt(req.param.id);

    product_md.getProductListByProductTypeId(product_type_id).then(result => {
        const products = result.data.map(product => ({
            id: product.id,
            product_name: product.product_name,
            base_price: product.base_price,
            unit: product.unit,
            description: product.description,
            product_type_name: product.product_type_name,
            provider_name: product.provider_name,
            quantity: product.quantity,
            product_type_name: product.product_type_name,
        }));
        res.json({ success: true, error: '', products });
    }).catch(error => {
        console.log("error: ", error);
        res.json({ success: false, error: 'Có lỗi xảy ra với CSDL' })
    });
});

module.exports = route;