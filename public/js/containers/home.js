/**
 * Created by zxw on 18-2-02
 */

import {connect} from 'react-redux';
import Home from '../components/home';

const mapStateToProps = (state)=>{
    return{
        essayList:state.editList.aList
    };
};

const mapDispatchToProps = (dispatch)=>({
    allEssayList:()=>{
        dispatch({type:'ALL_ESSAY_LIST'})
    },
    onDetials:()=>{
        console.log("文章内容：");
        dispatch({type:'ESS_DETIALS'})
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);
