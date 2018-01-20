import request from 'superagent';

export default store => next => action => {
    console.log(action.type);
    if (action.type === 'LOGIN') {
        request.post('/userInfo')
            .send(action.data)
            .end((err, res) => {
                console.log(action.data);
                if (err) {
                    // console.log("+++++++++++++++++++");
                    // return;
                }
                //
                next({type: "LOGIN_SUCCESS", isSuccess: res.body.isSuccess, logInfo: res.body.logInfo});
                //
            });
    }
    else
        next(action);
};
