/**
 * Created by ubuntu on 18-1-26.
 */
const express = require('express');
const router = express.Router();
const db = require('../dbs/connection');
const signSQL = require('../dbs/signSQL');

router.post('/signin', (req, res) => {
    const name = req.body.signInInfo.name;
    const password = req.body.signInInfo.password;
    let data = {};
    db.query(signSQL.findId,name,function (err, result){
        if(err){
            console.log(err);
        }else{
            if(result.length === 0){
                console.log('用户不存在，请核对用户是否存在');
            }else if(result[0].password === password && result[0].type === '0'){
                data.username = name;
                data.userType = result[0].type;
                data.password = result[0].password;
                data.userId = result[0].user_id;
                data.headPath = result[0].head_path;
                req.session.signInInfo = data;
                console.log('用户名密码匹配成功！');
                res.json({states:'SUCCESS',type:'0'});//普通用户登录
            }else　if(result[0].password === password && result[0].type === '1'){
                data.username = name;
                data.userType = result[0].type;
                data.password = result[0].password;
                data.userId = result[0].user_id;
                data.headPath = result[0].head_path;
                req.session.signInInfo = data;
                console.log('管理员登录！');
                res.json({states:'SUCCESS',type:'1'});//管理员登录
            }else{
                console.log('用户名或密码不正确！');
                res.json({states:'FAIL'});
            }
        }
    })
});
router.get('/deleteSession', (req, res) => {
    if(req.session.signInInfo !== undefined){
        console.log("清除session");
        console.log(req.session.signInInfo);
        req.session.destroy();
        console.log(req.session);
    }else{
        console.log("不存在session");
    }
});

module.exports = router;