/**
 * Created by ubuntu on 18-1-21.
 */
import request from 'superagent';

export default store => next => action => {
    if (action.type === 'SIGN_UP') {
        console.log(action);
        request.post('/signup')
            .send(action)
            .end((err, res) => {
                if(err){
                    console.log(err);
                }else{//res.redirect()不可实现页面跳转，必须在前端实现跳转
                    if(res.text === '{"states":"true"}'){
                        alert("注册成功，请登录～～～～");
                        window.location.href = '/signin';
                    }else{
                        alert("用户名不可重复，请重新输入！");
                    }
                }
            });
    }
    else
        next(action);
};