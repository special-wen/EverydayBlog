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
    const id = req.body.id;
    if(id === ''){//数据库增加数据
        db.query(editSQL.insert,[title,text], function (err, result) {
            if (err) return err;
            console.log('--------------------------INSERT----------------------------');
            console.log('INSERT ID:', result);
            console.log('-----------------------------------------------------------------\n\n');
        });
    }else{//数据库删除数据
        db.query(editSQL.update,[title,text,id],function (err, result) {
            if(err) return err;
            console.log('--------------------------UPDATE----------------------------');
            console.log('INSERT ID:', result);
            console.log('-----------------------------------------------------------------\n\n');
        })
    }
    db.query(editSQL.getMyAllTitle, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json(result);
    });
});


module.exports = router;