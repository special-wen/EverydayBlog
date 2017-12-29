/**
 * Created by zxw on 17-12-29.
 */

'use strict';
let express = require('express');
let router = express.Router();
let db = require('../dbs/connection');
let loginSQL = require('../dbs/loginSQL');

//判断信息
router.post('/userInfo',(req,res) =>{
    console.log(req.body);
    const name = req.body.userName;
    const password = req.body.userPassword;

    db.query(loginSQL.logSql, [name, password], function (err, result) {
        if (err) return err;
        else {
            if (result.length === 0) {
                db.query(loginSQL.findUser, name, function (err, result) {
                    if (err) return err;
                    else if (result.length != 0) {
                        res.json({isSuccess: false, logInfo: "password is not correct"});

                    }
                    else {
                        res.json({isSuccess: false, logInfo: "user not exit"});

                    }
                })
            }

            else if (result[0].name === name && result[0].password === password) {
                res.json({isSuccess: true, logInfo: "success"});
            }
        }
    })
});