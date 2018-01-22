const express = require('express');

const router = express.Router();
const listSql = require('../dbs/listSql');

router.get("/hello", (req, res) => {
    console.log(req);
    db.query(listSql.showList,function (err,result) {
        if(err){
            console.log("查找失败"+err);
            return err;
        }else {
            res.json({data:"helloword"});
        }
    })
    // res.json({data: "helloWorld"});
});

module.exports = router;