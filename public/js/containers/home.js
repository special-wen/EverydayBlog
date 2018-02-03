/**
 * Created by zxw on 18-2-02
 */

import {connect} from 'react-redux';
import Home from '../components/home';

const mapStateToProps = (state)=>{
    return{
        userInfo:state.userInfo.aList,
        essayList:state.editList.aList,
    };
};

const mapDispatchToProps = (dispatch)=>({
    allEssayList:()=>{
        dispatch({type:'ALL_ESSAY_LIST'})
    },
    onDetials:()=>{
        console.log("文章内容：");
        dispatch({type:'ESS_DETIALS'})
    },
    UserInfo:()=>{
        dispatch({type:"USER_INFO"})
    },
    myHome:()=>{
        console.log('我的主页');
        dispatch({type:'MY_HOME'})
    },
    setting:()=>{
        console.log('修改个人信息');
        dispatch({type:'CHANGE_USER_INFO'})
    },
    logOut:()=>{
        console.log('退出登录');
        dispatch({type:'LOGOUT'})
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);
