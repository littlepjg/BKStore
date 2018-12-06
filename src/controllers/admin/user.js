const express = require("express");
const user_md = require('../../models/userModel');

const route = express.Router();

route.get('/pages', (req, res) => {
    const pageNum = parseInt(req.query.pageNum);
    const limit = parseInt(req.query.limit);
    const searchValue = req.query.searchValue;
    user_md.getUserByPage(limit, pageNum, searchValue).then(result => {
        const users = result.data.map(user => ({
            id: user.id,
            full_name: user.full_name,
            email: user.email,
            phone_number: user.phone_number,
            address: user.address,
            level: user.level
        }));
        res.json({ success: true, error: '', users, pager: result.pager });
    }).catch(error => {
        console.log("error: ", error);
        res.json({ success: false, error: 'Có lỗi xảy ra với CSDL' })
    });
});

route.post('/delete', (req, res) => {
    const { id } = req.body;

    user_md.deleteUserById(id).then(result => {
        console.log("result: ", result);
        res.json({
            success: true,
            error: '',
            message: 'Xóa thành công'
        });
    }).catch(error => {
        console.log("error: ", error);
        res.json({
            success: false,
            error: 'Có lỗi xảy ra với CSDL'
        });
    });
});

module.exports = route;