/**
 * Created by lmy on 18-2-23.
 */
import request from 'superagent';

export default store=>next=>action=> {
    if (action.type === "OTHER_LIST") {
        // console.log(action);
        request.post('/detailHome')
            .send(action)
            .end((err, res)=> {
                if (err) {
                    console.log(err);
                }
                next({type:"ALL_LIST_HEADER", data: res.body});
            });
    }
    if (action.type === "ESS_DETIALS") {
        window.location.href = '/essay';
    }
    else
        next(action);
}