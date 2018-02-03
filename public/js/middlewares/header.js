/**
 * Created by zxw on 18-2-03.
 */

import request from 'superagent';

export default store=>next=>action=>{
    if (action.type === 'USER_INFO'){
        request.get('/userInfo')
            .end((err,res)=>{
            if (err){
                console.log(err);
            }
            alert("查询成功:"+res.body);
            next({type:"ALL_USER_INFO",data:res.body})
        })
    }else
        next(action);
}