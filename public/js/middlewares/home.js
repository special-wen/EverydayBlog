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
            if(res.text === '{"data":"false"}'){
                    alert('请先登录！！！');
                    window.location.href = '/';//跳转到登录后的界面
            }
            // alert(res.body);
            next({type:"ALL_LIST",data:res.body});

        })
    }

    else
        next(action);
}