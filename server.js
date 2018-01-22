const express = require('express');
const app = new express();
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
//const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const hello = require('./server/routers/hello');
const login = require('./server/routers/login');
const addEdit = require('./server/routers/addEdit');
const editList = require('./server/routers/editList');
const editDelete = require('./server/routers/deleteEdit');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.use("/", hello);
app.use("/",login);
app.use('/',addEdit);
app.use('/',editList);
app.use('/',editDelete);

app.use(cookieParser('这段签名的字符串可以是随意的'));
// app.use(session({
//     secret:'express_react_cookie',
//     resave: true,
//     saveUninitialized:true,
//     cookie: {maxAge: 60 * 1000 * 30}//过期时间
// }));

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('server start');
});