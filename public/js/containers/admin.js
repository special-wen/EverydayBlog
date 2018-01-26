/**
 * Created by ubuntu on 18-1-26.
 */
import {connect} from 'react-redux';
import Admin from '../components/admin';

const mapStateToProps = (state) => {
    console.log(state);
    return {
        userList: state.editList.aList
    };
};

const mapDispatchToProps = (dispatch) => ({
    allUserList: () => {
        dispatch({type:'ALL_USER_LIST'})
    },
    onDetial: () => {
        console.log('跳转到别人可见的详情页');
        dispatch({type:'USER_DETAIL'})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);