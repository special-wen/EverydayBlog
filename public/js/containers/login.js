import Login from '../components/login'
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    // console.log("+++++++++++++++++");
    // console.log(state.login.logInfo);
    return {
        logSuccess: state.login.logSuccess,
        logInfo: state.login.logInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (userInfo) => {
             //console.log(userInfo);
            dispatch({type: 'LOGIN', data: userInfo})
        },
        onChangeLogSuccess: () => {
            dispatch({type: "CHANGE_LOG_SUCCESS"});
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
