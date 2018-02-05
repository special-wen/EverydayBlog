/**
 * Created by lmy on 17-11-12.
 */
import request from 'superagent';

export default store => next => action => {
    if (action.type === 'DELETE_USER') {
        request.post('/delEdit')
            .send(action)
            .end((err, res) => {
                if(err){
                    console.log(err);
                }//删除文章之后改变列表
                next({type:"ALL_LIST_HEADER", data: res.body});
            });
    }

    else
        next(action);
};