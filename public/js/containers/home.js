/**
 * Created by zxw on 18-2-02
 */

import {connect} from 'react-redux';
import Home from '../components/home';

const mapStateToProps = (state)=>{
    return{
        essayList:state.editList.aList,
    };
};

const mapDispatchToProps = (dispatch)=>({
    allEssayList:()=>{
        dispatch({type:'ALL_ESSAY_LIST'})
    },
    onDetials:(e)=>{
        console.log("文章内容：");
        e.stopPropagation();
        const ess_id = e.target.parentNode.id;
        dispatch({type:'ESS_DETIALS',id:ess_id})
    },
    otherHome:(e)=>{
        console.log("别人的主页：");

    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);
