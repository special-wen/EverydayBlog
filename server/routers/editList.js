/**
 * Created by lmy on 17-11-12.
 */

const express = require('express');

const router = express.Router();

let db = require('../dbs/connection');
let editSQL = require('../dbs/editSQL');


router.post('/editList', (req, res) => {
    let allList = [];
    db.query(editSQL.getMyAllTitle, (err, result) => {
        if (err) {
            console.log(err);
        }
        result.map((list) =>{
            allList.push(list);
        });
        res.json(allList);
    });
});
module.exports = router;