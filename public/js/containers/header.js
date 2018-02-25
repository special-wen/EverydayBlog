import {connect} from 'react-redux';
import Header from '../components/header';

const mapStateToProps = (state)=> {
    return {
        userInfo: state.userInfo.aList,
    };
};

const mapDispatchToProps = (dispatch)=>({
    UserInfo: ()=> {
        dispatch({type: "USER_INFO"})
    },
    myHome: ()=> {
        // console.log('我的主页');
        dispatch({type: 'MY_HOME'})
    },
    setting: ()=> {
        // console.log('修改个人信息');
        dispatch({type: 'CHANGE_USER_INFO'})
    },
    onWritting: ()=> {
        // console.log('编写文章');
        dispatch({type: 'EDIT_ESSAY'})
    },
    onAdminList: ()=> {
        // console.log('管理员列表');
        dispatch({type: 'ADMIN_PAGE'})
    },
    onIndex: ()=> {
        // console.log('回到根目录');
        dispatch({type: 'BACK_INDEX'})
    },
    logOut: ()=> {
        // console.log('退出登录');
        dispatch({type: 'LOGOUT'})
    },
    onSignUp: () => {
        dispatch({type: 'GET_UP'});//注册跳转页面的请求
    },
    onSignIn: () => {
        dispatch({type: 'GET_IN'});//注册跳转页面的请求
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
