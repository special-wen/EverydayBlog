/**
 * Created by zxw on 18-1-30.
 */

const express = require('express');
const router = express.Router();

let db = require('../dbs/connection');
let editSQL = require('../dbs/editSQL');

router.post('/home',(req,res)=>{
    db.query(editSQL.getMyAllTitle,(err,result)=>{
        if(err){
            console.log("查询失败"+err);
        }
        
        res.json(result);
    });
});

module.exports = router;