/**
 * Created by ubuntu on 18-1-21.
 */
import Index from "../components/index";
import {connect} from "react-redux";
const mapStateToProps = () => {
    return {}
};
const mapDispatchToProps = (dispatch,ownProps) => ({
    deleteSession: () => {
        dispatch({type:'DELETE_SESSION'})
    },
    onSignUp: () => {
        dispatch({type:'GET_UP'});//注册跳转页面的请求
    },
    onSignIn: () => {
        dispatch({type:'GET_IN'});//注册跳转页面的请求
    },
    onSetting: () => {
        console.log("修改个人信息");
        dispatch({type:'FIX_INFO'});
    }
});
const SignUp = connect(mapStateToProps, mapDispatchToProps)(Index);
export default　SignUp;