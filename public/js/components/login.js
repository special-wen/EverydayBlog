/**
 * Created by lmy on 17-11-12.
 */
import React from 'react';

export default class Login extends React.Component {

    render() {
        return (
            <div>
                <p>用户名：<input type="text"/></p>
                <p>密  码：<input type="password"/></p>
                <button onClick={isLogin()}>登陆</button>
            </div>
        );
    }
}