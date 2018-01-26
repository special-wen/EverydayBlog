/**
 * Created by ubuntu on 18-1-21.
 */

export default store => next => action => {
    if (action.type === 'GET_UP') {
        console.log("send");
        window.location.href = "./signup";
    }else if(action.type === 'GET_IN'){
        console.log("login");
        window.location.href = "./signin";
    }
    else
        next(action);
};