/**
 * Created by zxw on 18-1-30.
 */

const express = require('express');
const router = express.Router();

let db = require('../dbs/connection');
let editSQL = require('../dbs/editSQL');
let userSQL = require('../dbs/signSQL');
router.post('/home',(req,res)=>{
    let count = 0;
    db.query(editSQL.getMyAllTitle,(err,result)=>{
        if(err){
            console.log("查询失败:"+err);
        }
        let aaa = [];
        result.map((stu) => {
            db.query(userSQL.findById,stu.user_id,(err,resUser)=>{
                resUser.map((user)=>{
                    stu.name = user.name;
                    aaa.push(stu);
                    if (aaa.length === result.length){
                        console.log(aaa);
                        res.json(aaa)
                    }
                })
            })
        });
    });
});

module.exports = router;