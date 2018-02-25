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
                next({type:"ALL_USER_INFO",data:res.body})
            })
    }
    if (action.type === 'MY_HOME'){
        window.location.href = '/myHome';
    }
    if (action.type === 'CHANGE_USER_INFO'){
        window.location.href = '/setting';
    }
    if(action.type === 'EDIT_ESSAY'){
        window.location.href = '/edit';
    }
    if(action.type === 'ADMIN_PAGE'){
        window.location.href = '/admin';
    }
    if(action.type === 'BACK_INDEX'){
        window.location.href = '/';
    }
    if (action.type === 'LOGOUT') {
        request.get('/deleteSession')
            .end((err, res) => {
                if (err) {
                    console.log(err);
                }
            });
        window.location.href = '/signin';
    }
    if (action.type === 'GET_UP') {
        console.log("send");
        window.location.href = "./signup";
    }
    if(action.type === 'GET_IN'){
        console.log("login");
        window.location.href = "./signin";
    }
    else
        next(action);
}
