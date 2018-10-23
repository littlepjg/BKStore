const express = require("express");
const config = require('config');
const user_md = require('../../models/user');

const route = express.Router();

const noPerPage = config.get('noPerPage');

route.get('/pages/:page', (req, res) => {
    getUserByPageWithSearch(req, res);
});

route.get('/pages/:page/:searchValue', (req, res) => {
    getUserByPageWithSearch(req, res);
});

function getUserByPageWithSearch(req, res) {
    let page = parseInt(req.params.page);
    let searchValue = req.params.searchValue;
    let limit = (page - 1) * noPerPage;

    let message = {
        success: true,
        error: '',
        totalUser: 0,
        users: [],
    }

    user_md.getTotalUser(searchValue, (err, data) => {
        if (err) {
            res.json({ success: false, error: 'Có lỗi xảy ra với CSDL' });
        } else {
            let totalUser = data[0].totalUser;
            if (totalUser > 0) {
                if (limit < totalUser) {
                    user_md.getUserByPage(limit, noPerPage, searchValue, (err, users) => {
                        if (err) {
                            res.json({ success: false, error: 'Có lỗi xảy ra với CSDL' })
                        } else {
                            res.json({ success: true, error: '', totalUser, users: [...users] });
                        }
                    })
                } else {
                    res.json({ success: false, error: 'Không tìm thấy dữ liệu' });
                }
            } else {
                res.json({ success: false, error: 'Không tìm thấy dữ liệu' });
            }
        }
    });
}

route.post('/delete', (req, res) => {
    const { id } = req.body;

    user_md.deleteUserById(id, (err, result) => {
        if (err) {
            res.json({
                success: false,
                error: 'Có lỗi xảy ra với CSDL'
            })
        } else if (result.affectedRows > 0) {
            res.json({
                success: true,
                error: '',
                message: 'Xóa thành công'
            })
        }
    })
});

module.exports = route;