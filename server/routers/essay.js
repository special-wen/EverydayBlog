/**
 * Created by zxw on 18-2-11.
 */

const express = require('express');
const router = express.Router();

let db = require('../dbs/connection');
let editSQL = require('../dbs/editSQL');
let userSQL = require('../dbs/signSQL');
router.post('/essayInfo',(req,res)=>{
    console.log(req.body.id);
    const ess_id = req.body.id;
    console.log(ess_id);
    db.query(editSQL.essList,ess_id,(err,result)=>{
        if (err){
            console.log("在这里查找失败"+err);
        }
        let essayInfo = [];
        console.log(essayInfo);
        let user_id = result[0].user_id;
        console.log(user_id);
        db.query(userSQL.userInfo,user_id,(err,resUser)=>{
            if (err){
                console.log(user_id+"查找失败"+err);
            }
            let name = resUser[0].name;
            let head = resUser[0].head_path;
            essayInfo.push({ess_id:ess_id,title:result[0].title,text:result[0].text,date:result[0].date,user_id:user_id,name:name,head:head});
            console.log(essayInfo);
            res.json(essayInfo);

        })

    })

});
module.exports = router;