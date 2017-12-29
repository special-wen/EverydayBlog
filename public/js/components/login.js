/**
 * Created by lmy on 17-11-12.
 */
import React from 'react';
// import {browserHistory} from 'react-router';

export default class Login extends React.Component {
    login(){
        const userName = this.refs.userName.value;
        const userPass = this.refs.userPassword.value;

        if(!userName || !userPass){
            alert("请输入帐号和密码");
        }
        this.props.onLogin(userName,userPass);
    }

    render() {
        return (
            <div>
                <p>用户名：<input type="text" ref="userName" required/></p>
                <p>密  码：<input type="password" ref="userPassword" required/></p>
                <button onClick={this.login.bind(this)}>登陆</button>
            </div>
        );
    }
}