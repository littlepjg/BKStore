const express = require("express");
const route = express.Router();
const user_md = require('../models/user');
const helper = require('../helpers/helper');

route.get('/', (req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>This is User page.</h1>");
    res.end();
});

route.post("/register", (req, res) => {
    let user = req.body;
    let message = {
        success: true,
        error: ''
    }
    user_md.getUserByEmail(user.email).then(
        users => {
            let user1 = users[0];
            // console.log(users);
            if (users.length > 0) {
                message.error = "Email đã được sử dụng";
                res.json(message);
            } else {
                user.passwd = helper.hashPassword(user.passwd);
                user.created_at = new Date();
                user.updated_at = new Date();
                user_md.addUser(user).then(
                    result => {
                        console.log(result);
                        res.json(message);
                    }
                ).catch(
                    err => {
                        message.error = "Có lỗi xảy ra với CSDL";
                        res.json(message);
                    }
                );
            }
        }
    ).catch(
        err => {
            message.error = "Có lỗi xảy ra với CSDL";
            res.json(message);
        }
    )
});

route.post("/login", (req, res) => {
    let user = req.body;
    let message = {
        success: true,
        error: ''
    }

    user_md.getUserByEmail(user.email).then(
        users => {
            let user1 = users[0];
            if (users.length < 1) {
                message.error = "Tài khoản không tồn tại";
                res.json(message);
            } else {
                if(helper.comparePassword(user.passwd, user1.passwd)){
                    res.json(message);
                }else {
                    message.error = "Mật khẩu không đúng";
                    res.json(message);
                }
            }
        }
    ).catch(
        err => {
            message.error = "Có lỗi xảy ra với CSDL";
            res.json(message);
        }
    )
})

module.exports = route;