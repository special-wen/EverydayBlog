/**
 * Create by zxw on 18-1-28
 */

import {connect} from 'react-redux';
import Home from '../components/home';

const mapStateProps = (state)=>{
    console.log(state);
    return{
        essayList:state.editList.aList
    }
};
const mapDispathchToProps = (dispatch) =>({
    allEssayList: () => {
        dispatch({type:'ALL_ESSAY_LIST'})
    },
    onDetial: () => {
        console.log('跳转到别人可见的详情页');
        dispatch({type:'USER_DETAIL'})
    }
});
export default connect(mapStateProps,mapDispathchToProps)(Home);