/**
 * Created by ubuntu on 18-1-29.
 */
const express = require('express');
const router = express.Router();
const db = require('../dbs/connection');
const signSQL = require('../dbs/signSQL');

router.post('/setting', (req,res) => {
   console.log(req.session.signInInfo);
    if(req.session.signInInfo === undefined){
        res.json({data:'false'});
    }else {
        const id = req.session.signInInfo.userId;
        const username = req.session.signInInfo.username;
        const password = req.session.signInInfo.password;
        const headPath = req.session.signInInfo.headPath;
        const oldInfo = {
            id: id,
            username: username,
            password: password,
            headPath: headPath,
            realName: '',
            major_class: '',
            sex: '',
            github: '',
            blog: ''
        };
        db.query(signSQL.stuInfo, id , function (err, result) {
            if(err){
                console.log("我在这里出错"+err);
            }
            if(result[0].sex === '0'){
                oldInfo.sex = '女';
            }else if(result[0].sex === '1'){
                oldInfo.sex = '男';
            }
            oldInfo.realName = result[0].stu_name;
            oldInfo.major_class = result[0].major_class;
            oldInfo.github = result[0].github;
            oldInfo.blog = result[0].blog;
            return res.json(oldInfo);
        });
    }
});
router.post('/fixinfo', (req, res) => {
    console.log(req.body);
    const name = req.body.newInfo.name;
    const password = req.body.newInfo.password;
    const headPath = req.body.newInfo.headPath;
    const realName = req.body.newInfo.realName;
    const major = req.body.newInfo.major;
    const id = req.body.newInfo.id;
    let sex = req.body.newInfo.sex;
    const git = req.body.newInfo.git;
    const blog = req.body.newInfo.blog;
    if(sex === '女'){
        sex = '0';//女生
    }else{
        sex = '1';
    }
    db.query(signSQL.findId,name,function (err, result){
        if(err){
            console.log("这里有错误"+err);
        }else{
            if(result.length === 0 || result[0].user_id === parseInt(id,10)){
                db.query(signSQL.updateUser,[name,password,headPath,id], function (err, result) {
                   if(err){
                       console.log("我在这里"+err);
                   }
                   db.query(signSQL.updateStu,[realName,sex,major,git,blog,id], function (err, result) {
                      if(err){
                          console.log("在这里"+err);
                      }
                      if(req.session.signInInfo.password !== password){
                          //若修改密码则清除session重新登录
                          req.session.signInInfo = {
                              username: name,
                              userType: req.session.signInInfo.userType,
                              password: password,
                              userId: id,
                              headPath: req.session.signInInfo.headPath
                          };
                          res.json({states:'true'});
                      }else{
                          res.json({states:'success'})
                      }

                       console.log("修改信息成功");
                   });
                });
            } else {
                console.log('用户名已存在,请重新输入');
                res.json({states:'false'});
            }
        }
    });
});

module.exports = router;