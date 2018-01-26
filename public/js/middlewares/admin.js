/**
 * Created by ubuntu on 18-1-26.
 */
import request from 'superagent';

export default store=>next=>action=> {
    if (action.type === 'ALL_USER_LIST') {
        request.post('/userList')
            .end((err,res) => {
                if(err){
                    console.log(err);
                }//得到res响应,发出新的action,得到数据库查询的信息
                next({type:"ALL_USER_LIST", data: res.body});
            })
    }
    if(action.type === 'USER_DETAIL'){
        window.location.href = '/detail';
    }
    else
        next(action);
}