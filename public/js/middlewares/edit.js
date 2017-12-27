/**
 * Created by lmy on 17-8-21.
 */
import request from 'superagent';

export default store=>next=>action=> {
    if (action.type === 'BUTTON_CLICK') {
        request.post('/edit')
            .send(action.data)
            .end((err, res)=> {
                if (err) {
                    next({type: "SUBMIT_SUCCESS", isSuccess: false})
                }
                next({type: "SUBMIT_SUCCESS", isSuccess: true});

            });
    }
    if(action.type === 'ALL_LIST'){
        request.post('./editList')
            .end((err,res) => {
                if(err){
                    console.log(err);
                }
                next({type:"ALL_LIST", data: res.body});
            })
    }
    else
        next(action);
}