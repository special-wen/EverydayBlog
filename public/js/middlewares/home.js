/**
 * Created by zxw on 18-1-30.
 */

import request from 'superagent';

export default store=>next=>action=>{
    if (action.type === "ALL_ESSAY_LIST"){
        request.get('/homeList')
            .end((err,res)=>{
                if (err){
                    console.log(err);
                }
                alert(res.body);
                next({type:"ALL_LIST",data:res.body});
            })
    }
    if (action.type === "ESS_DETIALS"){
        request.post('/essayList')
            .send(action)
            .end((err,res)=>{
                if (err){
                    console.log(err);
                }
                // next({type:"ESSAY_LIST",data:res.body});
                window.location.href = '/essay'
            })
    }
    else
        next(action);
}