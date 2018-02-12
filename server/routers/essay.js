/**
 * Created by zxw on 18-2-11.
 */

const express = require('express');
const router = express.Router();

let db = require('../dbs/connection');
let editSQL = require('../dbs/editSQL');
let userSQL = require('../dbs/signSQL');
router.get('/essayInfo',(req,res)=>{
    const ess_id = req.body.ess_id;
    console.log(ess_id);
    db.query(editSQL.essList,(err,result)=>{
        if (err){
            console.log("查找失败"+err);
        }
        let abc=[];
        result.map((ess)=>{
            db.query(userSQL.findById,ess.user_id,(err,resEss)=>{
                resEss.map((user)=>{
                    ess.name = user.name;
                    ess.head = user.head_path;
                    abc.push(ess);
                    console.log(abc);
                    res.json(abc);
                })
            })
        })
    })

});
module.exports = router;