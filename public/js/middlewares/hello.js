import request from 'superagent';

export default store => next => action => {
    if (action.type === 'GET_HELLO') {
        console.log(action);
        request.get('/hello')
            .end((err, res) => {
                next({type:"GET_HELLO", data: res.body.data});
            });
    }
    else
        next(action);
};