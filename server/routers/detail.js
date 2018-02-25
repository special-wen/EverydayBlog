/**
 * Created by lmy on 18-2-23.
 */
const express = require('express');
const router = express.Router();

let db = require('../dbs/connection');
let editSQL = require('../dbs/editSQL');
router.post('/detailHome', (req, res)=> {
    console.log(req.body.id);
    const user_id = req.body.id;
    db.query(editSQL.getMyAllTitle, user_id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json(result);
    });

});
module.exports = router;