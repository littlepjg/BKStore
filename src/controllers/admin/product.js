const express = require('express');
// const multer = require('multer');
// const path = require('path');
const product_md = require('../../models/productModel');
const route = express.Router();

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '../../../upload/product/')
//     },
//     filename: function (req, file, cb) {
//         console.log('file');
//         cb(null, path.basename(file.originalname) + '-' + Date.now() + path.extname(file.originalname))
//     }
// });

// const upload = multer({ storage }).array('photos');

route.get('/pages', (req, res) => {
    const pageNum = parseInt(req.query.pageNum);
    const limit = parseInt(req.query.limit);
    const searchValue = req.query.searchValue;
    const filter = JSON.parse(req.query.filter);

    product_md.getProductAdminByPage(limit, pageNum, searchValue, filter).then(result => {
        const products = result.data.map(product => ({
            id: product.id,
            product_name: product.product_name,
            base_price: product.base_price,
            unit: product.unit,
            product_type_name: product.product_type_name,
            provider_name: product.provider_name,
            quantity: product.quantity,
        }));
        res.json({ success: true, error: '', products, pager: result.pager });
    }).catch(error => {
        console.log("error: ", error);
        res.json({ success: false, error: 'Có lỗi xảy ra với CSDL' })
    });
});

route.post('/delete', (req, res) => {
    const { id } = req.body;

    product_md.deleteProduct(id).then(result => {
        res.json({ success: true, error: '', status: 'Xóa thành công' });
    }).catch(error => {
        res.json({ success: false, error });
    });
});

// route.post('/add', (req, res) => {
//     console.log(req.body);
//     upload(req, res, error => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('upload file success');
//         }
//     });
// });

module.exports = route;