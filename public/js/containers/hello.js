import Hello from "../components/hello";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        hello: state.hello.value
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDisplayHello: () => {
            dispatch({type: "GET_HELLO"});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);