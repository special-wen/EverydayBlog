/**
 * Created by zxw on 18-1-30.
 */

const express = require('express');
const router = express.Router();

let db = require('../dbs/connection');
let editSQL = require('../dbs/editSQL');
let userSQL = require('../dbs/signSQL');
router.get('/homeList',(req,res)=>{
    console.log("session中的username:");
    console.log(req.session.signInInfo.username);
    const user_id = req.session.signInInfo.userId;
    const user_name = req.session.signInInfo.username;
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
                    stu.head = user.head_path;
                    aaa.push(stu);
                    console.log(stu.head);
                    if (aaa.length === result.length){
                        aaa.session_name = user_name;
                        aaa.session_id = user_id;
                        // aaa.push(user_id);
                        // aaa.push(user_name);

                        res.json(aaa)
                    }
                })
            })
        });
    });
});

module.exports = router;