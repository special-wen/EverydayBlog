/**
 * Created by zxw on 18-2-03.
 */


const express = require('express');
const router = express.Router();


router.get('/userInfo',(req,res)=>{
    const user_id = req.session.signInInfo.userId;
    const user_name = req.session.signInInfo.username;
    const headPath = req.session.signInInfo.headPath;
    let user = [];
    // user.user_id = user_id;
    // user.user_name = user_name;
    user.push({user_id:user_id,user_name:user_name,headPath:headPath});
    console.log(user);
    res.json(user);
});

module.exports = router;