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

    user_md.getTotalUser(searchValue).then(
        data => {
            let totalUser = data[0].totalUser;
            message.totalUser = totalUser;
            if (totalUser > 0) {
                if (limit < totalUser) {
                    user_md.getUserByPage(limit, noPerPage, searchValue).then(
                        users => {
                            message.users = [...users];
                            res.json(message);
                        }
                    ).catch(
                        err => {
                            console.log(err);
                            message.error = "Có lỗi xảy ra với CSDL";
                            res.json(message);
                        }
                    )
                } else {
                    message.error = "404";
                    res.json(message);
                }
            } else {
                message.error = "Dữ liệu người dùng trống";
                res.json(message);
            }
        }
    ).catch(
        err => {
            console.log(err);
            message.error = "Có lỗi xảy ra với CSDL";
            res.json(message);
        }
    );
}

route.post('/delete', (req, res) => {
    const { id } = req.body;
    let message = {
        success: true,
        error: '',
    }

    user_md.deleteUserById(id).then(
        result => {
            if (result.affectedRows > 0) {
                message.status = "Xóa thành công";
            } else {
                message.error = "Người dùng không tồn tại";
            }
            res.json(message);
        }
    ).catch(
        err => {
            message.error = "Có lỗi xảy ra với CSDL";
            res.json(message);
        }
    );
});

module.exports = route;