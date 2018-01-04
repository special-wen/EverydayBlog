export default (state = {logSuccess: "", logInfo: ""}, action) => {

    if (action.type === 'LOGIN_SUCCESS') {
        // console.log("aaaaaaaaaaaaaaa");
        state.logSuccess = action.isSuccess;
        console.log(action.isSuccess)
        // console.log("aaaaaaaaaaaaaaaaaaa"+action.isSuccess);
        state.logInfo = action.logInfo;
        console.log(action.logInfo)
        // console.log(action.logInfo);
        return Object.assign({}, state); //创建对象拷贝 返回新的state对象
    }

    return state;
}