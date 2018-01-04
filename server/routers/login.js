/**
 * Created by zxw on 17-12-29.
 */

const express = require('express');

const router = express.Router();

let db = require('../dbs/connection')
let userSQL = require('../dbs/userSql')


router.post("/userInfo", (req, res) => {
    console.log(req);
    var name = req.body.userName;
    var password = req.body.userPassword;
    db.query(userSQL.logSql, [name, password], function (err, result) {
        if (err) return err;
        else {
            if (result.length === 0) {
                db.query(userSQL.findUser, name, function (err, result) {
                    if (err) return err;
                    else if (result.length != 0) {
                        res.json({isSuccess: false, logInfo: "password is not correct"});

                    }
                    else {
                        res.json({isSuccess: false, logInfo: "user not exites"});

                    }
                })
            }

            else if (result[0].name === name && result[0].password === password) {
                res.json({isSuccess: true, logInfo: "success"});
            }
        }
    })

});

module.exports = router;
