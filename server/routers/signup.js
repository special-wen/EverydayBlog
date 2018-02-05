/**
 * Created by ubuntu on 18-1-25.
 */
const express = require('express');
const router = express.Router();
const db = require('../dbs/connection');
const signSQL = require('../dbs/signSQL');

router.post('/signup', (req, res) => {
    console.log(req.body);
    const name = req.body.signUpInfo.name;
    const password = req.body.signUpInfo.password;
    const realName = req.body.signUpInfo.realName;
    const major = req.body.signUpInfo.major;
    let sex = req.body.signUpInfo.sex;
    const git = req.body.signUpInfo.git;
    const blog = req.body.signUpInfo.blog;
    const headPath = req.body.signUpInfo.headPath;
    if(sex === '女'){
        sex = '0';//女生
    }else{
        sex = '1';
    }
    db.query(signSQL.findId,name,function (err, result){
        if(err){
            console.log(err);
        }else{
            if(result.length === 0){
                db.query(signSQL.insert,[name,password,headPath],function (err, result){
                   if(err){//插入user表信息
                       console.log(err);
                   }else{
                       db.query(signSQL.findId,name,function (err, result){
                          if(err){
                              console.log(err);
                          } else{//通过name查找新插入数据的id
                              db.query(signSQL.insertInfo,[result[0].user_id,realName,sex,major,git,blog],function (err, result) {
                                  if(err){//插入student表信息
                                      console.log(err);
                                  }else{
                                      console.log("注册成功");
                                      res.json({states:'true'});
                                  }
                              });
                          }
                       });
                   }
                });
            } else{
                console.log('用户名已存在,请重新输入');
                res.json({states:'false'});
            }
        }
    });
});

module.exports = router;