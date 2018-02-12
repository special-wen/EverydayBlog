/**
 * Created by zxw on 18-2-03.
 */


const express = require('express');
const router = express.Router();
let db = require('../dbs/connection');
let userSQL = require('../dbs/signSQL');
router.get('/userInfo',(req,res)=>{
    if (req.session.signInInfo == null){
        let user = [];
        const user_id = 0;
        user.push({user_id:user_id});
        res.json(user);
    }else {
        const id = req.session.signInInfo.userId;
        db.query(userSQL.userInfo,id,(err,result)=>{
            if (err){
                console.log(err);
            }else {
                const name = result[0].name;
                const headPath = result[0].head_path;
                let user = [];
                user.push({user_id:id,user_name:name,headPath:headPath});
                res.json(user);
            }


        })
    }

});

module.exports = router;