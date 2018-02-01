/**
 * Created by zxw on 18-1-30.
 */

const express = require('express');
const router = express.Router();

let db = require('../dbs/connection');
let editSQL = require('../dbs/editSQL');
let userSQL = require('../dbs/signSQL');
router.get('/home',(req,res)=>{
    console.log("session中的username:");
    console.log(req.session.signInInfo.username);
    const index_name = req.session.signInInfo.username;
    // console.log("登录信息"+index_name);
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
                        aaa.push(index_name);
                        // console.log(aaa);
                        res.json(aaa)
                    }
                })
            })
        });
    });
});

module.exports = router;