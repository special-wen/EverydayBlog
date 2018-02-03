/**
 * Created by lmy on 17-11-12.
 */
import React from 'react';
import PropTypes from 'prop-types';
import '../../css/login.css';
export default class Login extends React.Component {

    render() {
        const {onClickSignIn} = this.props;
        return (
            <div id = "login">
                <form>
                    <label htmlFor="name">用户名：</label>
                    <input type="text" name="name" id="name"/>
                    <br/>
                    <label htmlFor="password">密码：</label>
                    <input type="password" name="password" id="password" />
                    <input type="button" value="登录" onClick={onClickSignIn} />
                </form>
            </div>
        );
    }
};
Login.propTypes = {
    onClickSignIn: PropTypes.func.isRequired
};