/**
 * Created by zxw on 18-02-02.
 */

export default (state={aList:{}},action) =>{
    if (action.type === "ALL_USER_INFO"){
        const aList = state.aList;
        return {aList:action.data}
    }
    return state;
}