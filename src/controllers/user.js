const express = require("express");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const user_md = require('../models/user');
const helper = require('../helpers/helper');

const route = express.Router();

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
    user_md.getUserByEmail(user.email, (err, users) => {
        if (err) {
            res.json({ success: false, error: 'Có lỗi xảy ra với CSDL' });
        } else if (users.length > 0) {
            res.json({ success: false, error: 'Email đã được sử dụng' });
        } else {
            user.passwd = helper.hashPassword(user.passwd);
            user.created_at = new Date();
            user.updated_at = new Date();

            // id, full_name, email, phone_number, address, level
            user_md.addUser(user, (err, result) => {
                if (!err) {
                    user_md.getUserById(result.insertId, (err, users) => {
                        const { id, full_name, email, phone_number, address, level } = users[0];
                        res.json({
                            success: true,
                            error: '',
                            message: 'Thêm tài khoản thành công',
                            user: {
                                id,
                                full_name,
                                email, phone_number,
                                address,
                                level
                            }
                        });
                    })
                } else {
                    res.json({ success: false, error: 'Có lỗi xảy ra với CSDL' });
                }
            });
        }
    });
});


// LocalStrategy expects to find credentials in parameters named username and password
const localOptions = { usernameField: 'email', passwordField: 'passwd' };
passport.use(new LocalStrategy(localOptions,
    function (email, password, done) {
        user_md.getUserByEmail(email, (err, users) => {
            if (err) done(err);
            if (!users[0]) { return done(null, false, { message: "Invalid email" }); }

            // compare password is 'password equal to user.password?
            if (!helper.comparePassword(password, users[0].passwd)) {
                return done(null, false, { message: "Invalid password" });
            }

            return done(null, users[0]);
        });
    }
));

// passport.serializeUser(function (user, done) {
//     done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//     user_md.getUserById(id, function (err, users) {
//         done(err, users[0]);
//     });
// });

route.post('/login', passport.authenticate('local', {
    session: false,
    failureFlash: true,
    successFlash: 'Welcome!'
}), (req, res) => {
    const { id, full_name, email, phone_number, address, level } = req.user;
    res.json({
        success: true,
        user: {
            id,
            full_name,
            email,
            phone_number,
            address,
            level
        },
        error: ''
    })
});

module.exports = route;