const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');

const app = express();

const controllers = require(__dirname + "/src/controllers");

// link detail: https://github.com/github/fetch/issues/323
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static('build'));

app.use(controllers);

app.get('/', (req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>Hi, my name is Tieu.</h1>");
    res.end();
    // res.sendFile(__dirname + '/build/index.html');
});

const { host, port } = config.get('server');

app.listen(port, host, () => {
    console.log("Server is running on post", port);
});