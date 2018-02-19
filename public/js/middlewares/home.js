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
                console.log(res.body);
                next({type:"ALL_LIST",data:res.body});
            })
    }
    if (action.type === "ESS_DETIALS"){
        console.log("文章页");
        window.location.href = '/essay';
    }
    else
        next(action);
}