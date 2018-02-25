import request from 'superagent';

export default store=>next=>action=> {
    if (action.type === 'ALL_USER_LIST') {
        request.get('/userList')
            .end((err,res) => {
                if(err){
                    console.log(err);
                }//得到res响应,发出新的action,得到数据库查询的信息
                if(res.text === '{"data":"false"}'){
                    alert('非管理员不能访问！！！');
                    window.location.href = '/';//跳转到登录后的界面
                }
                next({type:"ALL_STU_LIST", data: res.body});
            })
    }
    if(action.type === 'OTHER_DETAIL'){
        window.location.href = '/detail';
    }
    if(action.type === 'PERSON_HOME'){
        window.location.href = '/myHome';
    }
    if(action.type === 'USER_DELETE'){
        request.post('/deleteList')
            .send(action)
            .end((err,res) => {
                if(err){
                    console.log(err);
                }
                next({type:"ALL_STU_LIST", data: res.body});
            })
    }
    if(action.type === 'TYPE_CHANGE'){
        request.post('/changeType')
            .send(action)
            .end((err,res) => {
                if(err){
                    console.log(err);
                }
                next({type:"ALL_STU_LIST", data: res.body});
            })
    }
    else
        next(action);
}