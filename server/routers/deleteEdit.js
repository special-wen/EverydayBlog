/**
 * Created by lmy on 17-11-12.
 */

const express = require('express');

const router = express.Router();

let db = require('../dbs/connection');
let editSQL = require('../dbs/editSQL');


router.post('/delEdit', (req, res) => {
    const user_id = req.session.signInInfo.userId;
    db.query(editSQL.delete, req.body.id, function (err,result) {
        if (err){
            console.log(err);
        }
        console.log(result);
    });
    db.query(editSQL.getMyAllTitle, user_id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json(result);
    });
});

module.exports = router;