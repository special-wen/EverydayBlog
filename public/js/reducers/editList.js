/**
 * Created by ubuntu on 17-12-29.
 */
//文章列表的管理
export default (state = {aList:[]}, action) => {
    if(action.type === 'ALL_LIST' || action.type === 'ALL_STU_LIST' || action.type === 'ALL_ESS_LIST' || action.type === 'ALL_ESSAY' ) {
        const aList = state.aList;//文章列表和用户列表
        console.log(action.type);
        return {aList:action.data};
    }
    return state;
}