/**
 * Created by ubuntu on 18-1-21.
 */
import React from 'react';
import PropTypes from 'prop-types';
export default class Index extends React.Component {
    componentDidMount(){
        this.props.deleteSession();
    }
    render() {
        const {onSignUp,onSignIn,onSetting} = this.props;
        return <div>
            <button  onClick={onSignUp}>注册</button>
            <button  onClick={onSignIn}>登录</button>
            <button  onClick={onSetting}>修改信息</button>
        </div>
    }
}
Index.propTypes = {
    onSignUp: PropTypes.func.isRequired,
    onSignIn: PropTypes.func.isRequired,
    onSetting: PropTypes.func.isRequired
};