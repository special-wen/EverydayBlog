/**
 * Created by ubuntu on 18-1-29.
 */
import request from 'superagent';

export default store => next => action => {
    if(action.type === 'OLD_INFO'){
        request.post('/setting')
            .end((err,res) => {
                if(err){
                    console.log(err)
                }
                if(res.text === '{"data":"false"}'){
                    alert('请先登录，再修改信息');
                    window.location.href = '/signin';
                }else{
                    next({type:"GET_OLD_INFO", data: res.body});
                }
            })
    }
    if (action.type === 'UPDATE_INFO') {
        request.post('/fixinfo')
            .send(action)
            .end((err, res) => {
                if(err){
                    console.log(err);
                }else{//res.redirect()不可实现页面跳转，必须在前端实现跳转
                    if(res.text === '{"states":"true"}'){
                        alert("修改密码成功,请重新登录！！！");//清除session,更新session所存储的信息
                        window.location.href = '/signin';
                    }else if(res.text === '{"states":"false"}'){
                        alert("用户名不可重复，请重新输入！");
                    }else{
                        alert("修改信息成功！！！");
                    }
                }
            });
    }
    else
        next(action);
};