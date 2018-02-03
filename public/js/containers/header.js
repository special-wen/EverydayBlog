/**
 * Created by zxw on 18-2-03
 */
import {connect} from 'react-redux';
import Header from '../components/header';

const mapStateToProps = (state)=>{
    return{
        userInfo:state.userInfo.aList,
    };
};

const mapDispatchToProps = (dispatch)=>({
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
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);