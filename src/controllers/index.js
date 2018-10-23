var express = require("express");

var route = express.Router();

route.use("/admin", require(__dirname + "/admin.js"));
route.use("/user", require(__dirname  + "/user.js"));
// route.use("/blog", require(__dirname + "/blog.js"));

route.get("/", (req, res) => {
    res.json({"message": "This is Home page"});
});

module.exports = route;