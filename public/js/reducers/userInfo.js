/**
 * Created by zxw on 18-02-02.
 */

export default (state={aList:[]},action) =>{
    if (action.type === "ALL_USER_INFO"){
        const aList = state.aList;
        // console.log(action.data);
        return {aList:action.data}
    }
    return state;
}