/**
 * Created by zxw on 18-2-03.
 */


const express = require('express');
const router = express.Router();


router.get('/userInfo',(req,res)=>{
    if (req.session.signInInfo == null){
        let user = [];
        const user_id = 0;
        user.push({user_id:user_id});
        res.json(user);
    }else {

        const id = req.session.signInInfo.userId;
        const name = req.session.signInInfo.username;
        const headPath = req.session.signInInfo.headPath;
        let user = [];
        user.push({user_id:id,user_name:name,headPath:headPath});
        console.log(id,user.user_id);
        console.log(user);
        res.json(user);
    }

});

module.exports = router;