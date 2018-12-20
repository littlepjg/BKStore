const express = require("express");
const product_md = require('../../models/productModel');
const route = express.Router();

route.get('/list/:product_type_id', (req, res) => {
    const product_type_id = parseInt(req.params.product_type_id);

    product_md.getProductListByProductTypeId(product_type_id).then(result => {
        const products = result.map(product => ({
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

route.get('/pages', (req, res) => {
    // console.log('controller');
    console.log(req.params)

    const pageNum = parseInt(req.query.pageNum);
    const limit = parseInt(req.query.limit);

    const searchValue = JSON.parse(req.query.searchValue);
    const filter = JSON.parse(req.query.filter);

    product_md.getProductGuestByPage(limit, pageNum, searchValue, filter).then(result => {
        const products = result.data.map(product => ({
            id: product.id,
            product_name: product.product_name,
            product_images: product.product_images,
            base_price: product.base_price,
            unit: product.unit,
            description: product.description,
            quantity: product.quantity,
            provider_name: product.product_name,
            product_type_name: product.product_type_name,
        }));
        res.json({ success: true, error: '', products, pager: result.pager });
    }).catch(error => {
        console.log("error: ", error);
        res.json({ success: false, error: 'Có lỗi xảy ra với CSDL' })
    });
});

module.exports = route;