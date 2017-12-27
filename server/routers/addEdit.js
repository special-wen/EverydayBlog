/**
 * Created by lmy on 17-8-21.
 */
'use strict';

let express = require('express');
let router = express.Router();
let db = require('../dbs/connection');
let editSQL = require('../dbs/editSQL');

//增加

router.post('/edit', (req, res) => {
    console.log(req.body);
    const title = req.body.title;
    const text = req.body.text;

    db.query(editSQL.insert,[title,text], function (err, result) {
        console.log(result);
        if (err) return err;
        console.log('--------------------------INSERT----------------------------');
        console.log('INSERT ID:', result);
        console.log('-----------------------------------------------------------------\n\n');

        res.json({isSuccess:true})

    });
});


module.exports = router;