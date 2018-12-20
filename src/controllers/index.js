const express = require('express');
const path = require('path');

const route = express.Router();

route.use("/admin", require(__dirname + "/admin.js"));
route.use("/user", require(__dirname + "/user.js"));
// route.use("/blog", require(__dirname + "/blog.js"));
route.use("/guest", require(__dirname+"/guest.js"));

route.get("/", (req, res) => {
    res.json({ "message": "This is Home page" });
});

module.exports = route;