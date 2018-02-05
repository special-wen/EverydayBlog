/**
 * Created by ubuntu on 18-1-26.
 */
import {connect} from 'react-redux';
import Admin from '../components/admin';

const mapStateToProps = (state) => {
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
    },
    onClickBackHome: () => {
        console.log('跳转到个人主页，仅自己可见');
        dispatch({type:'PERSON_HOME'})
    },
    onDelete: (e) => {
        e.stopPropagation();
        const id = e.target.parentNode.parentNode.id;
        dispatch({type:'USER_DELETE',id:id});
    },
    onChangeType: (e) => {
        e.stopPropagation();
        const id = e.target.parentNode.parentNode.id;
        const classType = e.target.innerText;
        dispatch({type:'TYPE_CHANGE',id:id,classType:classType});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);