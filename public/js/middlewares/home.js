/**
 * Created by zxw on 18-1-30.
 */

import request from 'superagent';

export default store=>next=>action=>{
    if (action.type === "ALL_ESSAY_LIST"){
        request.get('/home')
            .end((err,res)=>{
            if (err){
                console.log(err);
            }
            next({type:"ALL_ESS_LIST",data:res.body});
        })
    }else
        next(action);
}