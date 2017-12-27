export default (state = {value: ""}, action) => {
    if(action.type === 'GET_HELLO') {
        const value = state.value;
        return {value: action.data};
        //return Object.assign({}, state);
    }
    return state;
}