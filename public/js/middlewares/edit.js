/**
 * Created by lmy on 17-8-21.
 */
import request from 'superagent';

export default store=>next=>action=> {
    if (action.type === 'BUTTON_CLICK') {
        request.post('/edit')
            .send(action)
            .end((err, res)=> {
                if (err) {
                    console.log(err);
                }//添加更新文章之后改变列表
                next({type: "ALL_LIST_HEADER", data: res.body});

            });
    }
    if(action.type === 'ALL_LIST'){//改变列表的action
        request.get('/editList')
            .end((err,res) => {
                if(err){
                    console.log(err);
                }//得到res响应,发出新的action,得到数据库查询的信息
                next({type:"ALL_LIST_HEADER", data: res.body});
            })
    }
    else
        next(action);
}