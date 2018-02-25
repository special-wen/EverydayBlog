/**
 * Created by ubuntu on 18-1-26.
 */
const express = require('express');

const router = express.Router();

const moment = require('moment');
let db = require('../dbs/connection');
let signSQL = require('../dbs/signSQL');


router.get('/userList', (req, res) => {//初始化用户列表
    if(req.session.signInInfo.userType === '0'){
        res.json({data:'false'});
    }else{
        db.query(signSQL.myAllStudent, (err, resultStu) => {
            if (err) {
                console.log(err);
            }
            let boss = [];
            resultStu.map((stu) => {
                db.query(signSQL.userInfo,stu.user_id, (err, resultUser) => {
                    let count = 0;
                    resultUser.map((user) => {
                        //返回的数组对象中包括type,用户类型
                        stu.type = user.type;
                        db.query(signSQL.findCount,stu.user_id,(err, resultEssay) => {
                            if(err){
                                console.log(err);
                            }else{
                                stu.count = resultEssay.length;
                                if(resultEssay.length !== 0){
                                    stu.date =　moment(resultEssay[resultEssay.length - 1].date).format('YYYY-MM-DD HH:mm:ss');
                                }
                                boss.push(stu);
                                if(boss.length === resultStu.length){
                                    res.json(boss);
                                }
                            }
                        });
                    });
                });
            });
        });
    }
});
router.post('/deleteList', (req, res) => {
    const id = req.body.id;//删除用户操作
    db.query(signSQL.deleteStu, id, (err, result) => {
        if (err) {
            console.log(err);
        }
    });
    db.query(signSQL.deleteUser, id, (err, result) => {
        if(err){
            console.log(err);
        }
    });
    db.query(signSQL.myAllStudent, (err, result) => {
        if (err) {
            console.log(err);
        }
        db.query(signSQL.myAllStudent, (err, resultStu) => {
            if (err) {
                console.log(err);
            }
            let boss = [];
            resultStu.map((stu) => {
                db.query(signSQL.userInfo,stu.user_id, (err, resultUser) => {
                    resultUser.map((user) => {
                        //返回的数组对象中包括type,用户类型
                        stu.type = user.type;
                        boss.push(stu);
                        if(boss.length === resultStu.length){
                            res.json(boss);
                        }
                    });
                });
            });
        });
    });
});
router.post('/changeType', (req, res) => {
    const id = req.body.id;
    const classType = req.body.classType;
    if(classType === '+'){//更新为管理员
        db.query(signSQL.updateType, ['1',id], (err, result) => {
            if(err){
                console.log(err);
            }
        });
    }else{//更新为普通用户
        db.query(signSQL.updateType, ['0',id], (err, result) => {
            if(err){
                console.log(err);
            }
        });
    }
    db.query(signSQL.myAllStudent, (err, result) => {
        if (err) {//重新初始化列表
            console.log(err);
        }
        db.query(signSQL.myAllStudent, (err, resultStu) => {
            if (err) {
                console.log(err);
            }
            let boss = [];
            resultStu.map((stu) => {
                db.query(signSQL.userInfo,stu.user_id, (err, resultUser) => {
                    resultUser.map((user) => {
                        //返回的数组对象中包括type,用户类型
                        stu.type = user.type;
                        boss.push(stu);
                        if(boss.length === resultStu.length){
                            res.json(boss);
                        }
                    });
                });
            });
        });
    });
});
module.exports = router;
