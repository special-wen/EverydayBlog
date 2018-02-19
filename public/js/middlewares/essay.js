/**
 * Created by lmy on 18-2-12.
 */
import request from 'superagent';

export default store=>next=>action=>{
    if (action.type === "ALL_ESSAY_INFO"){
        request.post('/essayInfo')
            .send(action)
            .end((err,res)=>{
                if (err){
                    console.log(err);
                }
                next({type:"ALL_ESSAY",data:res.body});
            })
    }else
        next(action);
}