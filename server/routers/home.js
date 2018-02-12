/**
 * Created by zxw on 18-1-30.
 */

const express = require('express');
const router = express.Router();

let db = require('../dbs/connection');
let editSQL = require('../dbs/editSQL');
let userSQL = require('../dbs/signSQL');
router.get('/homeList',(req,res)=>{
    db.query(editSQL.getAllEssay,(err,result)=>{
        if(err){
            console.log("我在这里查询失败:"+err);
        }
        if (result.ess_id<=10){
            let aaa = [];
            result.map((stu) => {
                db.query(userSQL.findById,stu.user_id,(err,resUser)=>{
                    resUser.map((user)=>{
                        stu.name = user.name;
                        stu.head = user.head_path;
                        aaa.push(stu);
                        if (aaa.length === result.length){
                            // aaa.session_name = user_name;
                            // aaa.session_id = user_id;
                            console.log(aaa);
                            res.json(aaa);
                        }
                    });
                });
            });
        } else {
            db.query(editSQL.getLimitEssay,(err,result)=>{
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
                            if (aaa.length === result.length){
                                // aaa.push(user_id);
                                // aaa.push(user_name);
                                res.json(aaa)
                            }
                        });
                    });
                });
            })
        }

    });

});

// router.post('/essayList',(req,res)=>{
//     const ess_id = req.body.id;
//     console.log(ess_id);
//     let aaa= {};
//     aaa.essId = ess_id;
//     req.session.essayInfo = aaa;
//     console.log(req.session.essayInfo);
// })
module.exports = router;