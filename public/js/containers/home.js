/**
 * Created by zxw on 18-2-02
 */

import {connect} from 'react-redux';
import Home from '../components/home';

const mapStateToProps = (state)=> {
    return {
        essayList: state.editList.aList,
    };
};

const mapDispatchToProps = (dispatch)=>({
    allEssayList: ()=> {
        dispatch({type: 'ALL_ESSAY_LIST'})
    },
    onDetials: (e)=> {
        e.stopPropagation();
        const ess_id = e.target.parentNode.id;
        localStorage.setItem("ess_id", ess_id);
        dispatch({type: 'ESS_DETIALS', id: ess_id})
    },
    otherHome: (e)=> {
        //跳转到别人可见的详情页
        const id = e.target.parentNode.parentNode.id;
        console.log(id);
        e.stopPropagation();
        localStorage.setItem("user_id",id);
        dispatch({type: 'OTHER_DETAIL', id: id});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

