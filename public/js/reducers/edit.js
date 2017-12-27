/**
 * Created by lmy on 17-8-21.
 */
// export default (state = {submitSuccess: ""}, action) => {
//     if(action.type = "SUBMIT_SUCCESS"){
//         state.submitSuccess = action.isSuccess;
//
//         return Object.assign({},state);
//     }
//     if (action.type === 'DELETE_EDIT_FLAG') {
//
//         switch (action.data) {
//             case 'success':
//                 state.deleteFlag = true;
//                 break;
//             default:
//                 state.deleteFlag = false;
//         }
//
//         return Object.assign({}, state);
//     }
//     return state;
// }
// export default (state = {aList: ""}, action) => {
//     if(action.type === 'ALL_LIST') {
//         state.aList = "wang";
//         console.log(state.aList);
//         return Object.assign({}, state);
//     }
//     return state;
// }
export default (state = {aList:[],show:[]}, action) => {
    if(action.type === 'ALL_LIST') {
        const aList = state.aList;
        return {aList:action.data};
    }
    return state;
}