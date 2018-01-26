/**
 * Created by lmy on 17-11-12.
 */
import {connect} from 'react-redux';
import Login from '../components/login';
import {signIn} from "../action";

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => ({
    onClickSignIn: () => {
        const inputArray = document.getElementsByTagName("input");
        const signInInfo = {
            name:inputArray[0].value,
            password:inputArray[1].value
        };
        dispatch(signIn(signInInfo));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);