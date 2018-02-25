/**
 * Created by ubuntu on 18-1-26.
 */
import request from 'superagent';

export default store => next => action => {
    if (action.type === 'SIGN_IN') {
        console.log(action);
        request.post('/signin')
            .send(action)
            .end((err, res) => {
                if(err){
                    console.log(err);
                }else{//res.redirect()不可实现页面跳转，必须在前端实现跳转
                    if(res.text === '{"states":"SUCCESS","type":"0"}'){
                        // alert("登录成功");
                        window.location.href = '/myHome';
                    }else if(res.text === '{"states":"SUCCESS","type":"1"}'){
                        // alert("管理员登录成功");
                        window.location.href = '/admin';
                    }else{
                        alert("用户名或密码错误");
                    }
                }
            });
    }
    else
        next(action);
};