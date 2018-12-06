const express = require("express");
const product_md = require('../models/productModel');

const route = express.Router();

route.use("/dashboard", require(__dirname + "/admin/dashboard.js"));
route.use("/user", require(__dirname + "/admin/user.js"));
route.use("/post", require(__dirname + "/admin/post.js"));
route.use("/product", require(__dirname + "/admin/product.js"));

route.get('/', (req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>This is Admin page.</h1>");
    res.end();
});

route.get('/provider', (req, res) => {
    product_md.getProviders().then(results => {
        const providers = results.map(r => ({
            id: r.id,
            name: r.name,
            logo: r.logo
        }));
        res.json({ success: true, error: '', providers });
    }).catch(error => {
        console.log("error: ", error);
        res.json({ success: false, error: 'Có lỗi xảy ra với CSDL' })
    });
});

route.get('/product_type', (req, res) => {
    product_md.getProductTypes().then(results => {
        const productTypes = results.map(r => ({
            id: r.id,
            name: r.product_type_name,
            logo: r.icon_image
        }));
        res.json({ success: true, error: '', productTypes });
    }).catch(error => {
        console.log("error: ", error);
        res.json({ success: false, error: 'Có lỗi xảy ra với CSDL' })
    });
});

module.exports = route;