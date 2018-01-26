import Hello from "../components/hello";
import {connect} from "react-redux";
import { sayHello } from '../action';
const mapStateToProps = (state) => {
    return {
        hello: state.hello.value
    }
};
const mapDispatchToProps = (dispatch,ownProps) => ({
        onDisplayHello: () => {
            dispatch(sayHello(ownProps.hello));
        }
});
const PublishLink = connect(mapStateToProps, mapDispatchToProps)(Hello);
export default　PublishLink;