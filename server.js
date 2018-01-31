const express = require('express');
const app = new express();
const path = require('path');
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const Store = require('express-mysql-session');


const hello = require('./server/routers/hello');
const addEdit = require('./server/routers/addEdit');
const editList = require('./server/routers/editList');
const editDelete = require('./server/routers/deleteEdit');
const signUp = require('./server/routers/signup');
const signIn = require('./server/routers/login');
const Admin = require('./server/routers/admin');
const Setting = require('./server/routers/setting');
const Home = require('./server/routers/home');

const db_config = {
    host: 'localhost',
    user: 'root',
    password: "zxwzxwzxw",
    database: 'dailySummary',
    port: 3306
};
app.use(cookieParser());
app.use(session({
    secret:'react',
    store:new Store(db_config)
}));
app.use(function(req, res, next) {
    const _user = req.session.signInInfo;
    if(_user){
        app.locals.signInInfo = _user;//传入当前变量到界面
    }

    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));


//所要处理的静态路由必须引进server服务页面
app.use('/', hello);
app.use('/',addEdit);
app.use('/',editList);
app.use('/',editDelete);
app.use('/',signUp);
app.use('/',signIn);
app.use('/',Admin);
app.use('/',Setting);
app.use('/',Home);

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// app.use('/', function (req, res) {
//     console.log('hello');
//     delete req.session.signInInfo;
//     delete app.locals.signInInfo;
// });
app.listen(3000, () => {
    console.log('server start');
});

