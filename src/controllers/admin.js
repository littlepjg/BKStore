const express = require("express");
const config = require('config');
const user_md = require('../models/user');

const route = express.Router();
const noPerPage = config.get('noPerPage');

route.get('/', (req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>This is Admin page.</h1>");
    res.end();
});

route.get('/user/pages/:page', (req, res) => {
    let page = parseInt(req.params.page);
    let limit = (page - 1) * noPerPage;

    let message = {
        success: true,
        error: '',
        totalUser: 0,
        users: [],
    }

    user_md.getTotalUser().then(
        data => {
            let totalUser = data[0].totalUser;
            message.totalUser = totalUser;
            if (totalUser > 0) {
                if (limit < totalUser) {
                    user_md.getUserByPage(limit, noPerPage).then(
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
            }
        }
    ).catch(
        err => {
            console.log(err);
            message.error = "Có lỗi xảy ra với CSDL";
            res.json(message);
        }
    )
})

route.get('/user/delete/:id', (req, res) => {
    const { id } = req.params;
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
    )
})

module.exports = route;