/**
 * Created by zxw on 18-2-03.
 */
const express = require('express');
const router = express.Router();
let db = require('../dbs/connection');
let userSQL = require('../dbs/signSQL');

router.get('/userInfo',(req,res)=>{
    res.json(req.session.signInInfo);
});

module.exports = router;