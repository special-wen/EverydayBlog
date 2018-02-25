import React from 'react';
import PropTypes from 'prop-types';
import '../../css/header.css';

export default class Header extends React.Component{
    componentDidMount(){
        this.props.UserInfo();
    }
    render(){
        const {userInfo,myHome,setting,logOut,onSignUp,onSignIn,onWritting,onAdminList,onIndex} = this.props;
        if(userInfo === undefined || userInfo === null){
            return <div>
                <div id = "header">
                    <div id="logo">Welcome to myProject~~~~~(blog)</div>
                    <div id="choose">
                        <span onClick={onIndex}>Home</span>
                        <span onClick={onSignUp}> | 注册</span>
                        <span onClick={onSignIn}> | 登录</span>
                    </div>
                </div>
                {this.props.children}
            </div>
        }else if(userInfo.userType === '0'){//普通用户
            return <div>
                <div id = "header">
                    <div id="logo">Welcome to myProject~~~~~~(blog)</div>
                    <ul>
                        <li>{userInfo.username}</li>
                        <li><img src={userInfo.headPath} alt="" width={60} height={60}/></li>
                        <li onClick={myHome}>我的主页</li>
                        <li onClick={setting}>修改个人信息</li>
                        <li onClick={onWritting}>写文章</li>
                        <li onClick={logOut}>退出登录</li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        }else{//管理员
            return <div>
                <div id = "header">
                    <div id="logo">Welcome to everydayWrite~~~~~~</div>
                    <ul>
                        <li>{userInfo.username}</li>
                        <li><img src={userInfo.headPath} alt="" width={60} height={60}/></li>
                        <li onClick={onIndex}>Home</li>
                        <li onClick={myHome}>我的主页</li>
                        <li onClick={setting}>修改个人信息</li>
                        <li onClick={onWritting}>写文章</li>
                        <li onClick={onAdminList}>管理员列表</li>
                        <li onClick={logOut}>退出登录</li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        }
    }
}

Header.propTypes={
    onSignUp: PropTypes.func.isRequired,
    onSignIn: PropTypes.func.isRequired,
    onWritting: PropTypes.func.isRequired,
    logOut:PropTypes.func.isRequired,
    setting:PropTypes.func.isRequired,
    myHome:PropTypes.func.isRequired,
    onAdminList:PropTypes.func.isRequired,
    onIndex:PropTypes.func.isRequired
};
