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
    db.query(signSQL.findId,name,function (err, result){
        if(err){
            console.log(err);
        }else{
            if(result.length === 0){
                console.log('用户不存在，请核对用户是否存在');
            }else if(result[0].password === password && result[0].type === '0'){
                console.log('用户名密码匹配成功！');
                res.json({states:'SUCCESS',type:'0'});//普通用户登录
            }else　if(result[0].password === password && result[0].type === '1'){
                console.log('管理员登录！');
                req.session.user = result[0];
                res.json({states:'SUCCESS',type:'1'});//管理员登录
            }else{
                console.log('用户名或密码不正确！');
                res.json({states:'FAIL'});
            }
        }
    })
});

module.exports = router;