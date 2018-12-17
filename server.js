const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const multer = require('multer');
const path = require('path');
var upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback) { callback(null, './upload/product'); },
        filename: function (req, file, callback) { callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); }
    }),
});

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
app.use(cookieParser());

// app.use(express.static('build'));

// express session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// passport init
app.use(passport.initialize());
app.use(passport.session());

// connect flash
app.use(flash());

// // global vars
// app.use(function (req, res, next) {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     res.locals.user = req.user || null;
//     next();
// });

app.use(controllers);

app.get('/', (req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>Hi, my name is Tieu.</h1>");
    res.end();
    // res.sendFile(__dirname + '/build/index.html');
});

app.get('/photos/:type/:name', (req, res) => {
    const { type, name } = req.params;
    res.sendFile(__dirname + `/upload/${type}/${name}`);
});

app.post('/upload', upload.any(), (req, res) => {
    console.log("req.body"); //form fields
    console.log(req.body);
    console.log(req.body.file);
    console.log("req.file");
    console.log(req.files); //form files
    if (!req.body && !req.files) {
        res.json({ success: false });
    }
});

const { host, port } = config.get('server');

app.listen(port, host, () => {
    console.log("Server is running on post", port);
});