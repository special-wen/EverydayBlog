/**
 * Create by zxw on 18-1-28
 */

import {connect} from 'react-redux';
import Home from '../components/home';

const mapStateProps = (state)=>{
    console.log(state);
    return {
        userList: state.editList.aList
    };
};
const mapDispathchToProps = (dispatch) =>({
    allUserList: () => {
        dispatch({type:'ALL_USER_LIST'})
    }
});
export default connect(mapStateProps,mapDispathchToProps)(Home);