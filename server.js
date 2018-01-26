const express = require('express');
const app = new express();
const path = require('path');
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

const hello = require('./server/routers/hello');
const addEdit = require('./server/routers/addEdit');
const editList = require('./server/routers/editList');
const editDelete = require('./server/routers/deleteEdit');
const signUp = require('./server/routers/signup');
const signIn = require('./server/routers/login');
const Admin = require('./server/routers/admin');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.use(cookieParser());

//所要处理的静态路由必须引进server服务页面
app.use('/', hello);
app.use('/',addEdit);
app.use('/',editList);
app.use('/',editDelete);
app.use('/',signUp);
app.use('/',signIn);
app.use('/',Admin);

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('server start');
});

