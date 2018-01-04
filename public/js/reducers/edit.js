/**
 * Created by lmy on 17-8-21.
 */

export default (state = {aList:[],show:[]}, action) => {
    if(action.type === 'ALL_LIST') {
        const aList = state.aList;
        return {aList:action.data};
    }
    return state;
}