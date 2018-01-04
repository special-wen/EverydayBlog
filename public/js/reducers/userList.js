export default (state = {user: []}, action) => {
    if (action.type === 'SHOW_USERS') {
        state.user = action.data;

        return Object.assign({}, state);
    }

    if (action.type === 'DELETE_USER_FLAG') {

        switch (action.data) {
            case 'success':
                state.deleteFlag = true;
                break;
            default:
                state.deleteFlag = false;
        }

        return Object.assign({}, state);
    }

    if (action.type === 'UPDATE_USER_FLAG') {

        switch (action.data) {
            case 'success':
                state.updateFlag = true;
                break;
            default:
                state.updateFlag = false;
        }

        return Object.assign({}, state);
    }

    if (action.type === 'FIND_USER_SUCCESS') {
        switch (action.isSuccess) {
            case true:
                // console.log(action.data)
                state.user = action.data;
                state.findFlag = true;
                break;
            default:
                state.findFlag = false;

        }

        return Object.assign({}, state);
    }

    return state;
}