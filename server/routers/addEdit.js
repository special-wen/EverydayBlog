/**
 * Created by lmy on 17-8-21.
 */
'use strict';

const express = require('express');
const router = express.Router();
const db = require('../dbs/connection');
const editSQL = require('../dbs/editSQL');


//增加更新
router.post('/edit', (req, res) => {
    console.log(req.body);
    const title = req.body.title;
    const text = req.body.text;
    const ess_id = req.body.id;
    const user_id = req.session.signInInfo.userId;
    if(ess_id === ''){//数据库增加数据
        db.query(editSQL.insert,[user_id,title,text], function (err, result) {
            if (err) return err;
            console.log('--------------------------INSERT----------------------------');
            console.log('INSERT ID:', result);
            console.log('-----------------------------------------------------------------\n\n');
        });
    }else{//数据库更新数据
        db.query(editSQL.update,[title,text,ess_id],function (err, result) {
            if(err) return err;
            console.log('--------------------------UPDATE----------------------------');
            console.log('INSERT ID:', result);
            console.log('-----------------------------------------------------------------\n\n');
        })
    }
    db.query(editSQL.getMyAllTitle, user_id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json(result);
    });
});


module.exports = router;