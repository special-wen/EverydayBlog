/**
 * Created by lmy on 18-2-4.
 */
import request from 'superagent';

export default store=>next=>action=>{
    if (action.type === "ESS_DETIALS"){
        window.location.href = '/essay';
    }
    else
        next(action);
}