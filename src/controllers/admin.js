const express = require("express");
const route = express.Router();

route.get('/', (req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>This is Admin page.</h1>");
    res.end();
});

module.exports = route;