/**
 * Create by zxw on 18-1-28
 */

import request from 'superagent';

export default store=>next=>action=> {
    if (action.type === 'ALL_ESSAY_LIST') {
        request.post('/home')
            .end((err,res) => {
                if(err){
                }//得到res响应,发出新的action,得到数据库查询的信息
                alert("data:"+res.body);
                next({type:"ALL_ESSAY_LIST", data: res.body});
            })
    }

    else
        next(action);
}