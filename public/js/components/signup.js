/**
 * Created by ubuntu on 18-1-21.
 */
/**
 * Created by ubuntu on 18-1-21.
 */
import React from 'react';
import '../../css/sign.css';
import PropTypes from 'prop-types';
export default class SignUp extends React.Component {
    render() {
        const {onClickSignUp,onSavePathClick} = this.props;
        return <div>
            <form>
                <label htmlFor="name">用户名：</label>
                <input type="text" name="name" id="name"/>
                <br />
                <label htmlFor="password">密码：</label>
                <input type="password" name="password" id="password" />
                <br />
                <div id="image" onClick={onSavePathClick}></div>
                <label htmlFor="name">真实姓名：</label>
                <input type="text" name="realName" id="realName"/>
                <br />
                <label htmlFor="major">专业班级：</label>
                <input type="text" name="major" id="major" />
                <br />
                <label htmlFor="male">男</label>
                <input type="radio" name="sex" id="male" />
                <label htmlFor="female">女</label>
                <input type="radio" name="sex" id="female"/>
                <span id="normal">**若不选择默认为女生**</span>
                <br />
                <label htmlFor="gitAddress">github地址：</label>
                <input type="text" name="gitAddress" id="gitAddress"/>
                <br />
                <label htmlFor="blogAddress">博客地址：</label>
                <input type="text" name="blogAddress" id="blogAddress" />
                <br />
                <input type="button" value="提交" onClick={onClickSignUp} />
            </form>
        </div>
    }
};
SignUp.propTypes = {
    onClickSignUp: PropTypes.func.isRequired,
    onSavePathClick: PropTypes.func.isRequired
};