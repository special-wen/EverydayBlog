/**
 * Created by zxw on 18-2-03.
 */

import React from 'react';
import PropTypes from 'prop-types';
function UserInfo(props) {
    console.log(props.user_name+props.headPath);
    if (props.headPath == null ){
        return <div id = "header">
            <ul>
                <li>{props.user_name}</li>
                <li><img src="../../images/photo.jpeg" alt="" width={60} height={60}/></li>
                <li onClick={props.myHome}>我的主页</li>
                <li onClick={props.setting}>修改个人信息</li>
                <li onClick={props.logOut}>退出登录</li>
            </ul>
        </div>
    }
    

}
export default class Header extends React.Component{
    componentDidMount(){
        this.props.UserInfo();
    }
    render(){
        const {userInfo,myHome,setting,logOut} = this.props;
        return <div>
            {userInfo.map((val)=>
                <UserInfo key = {val.user_id} myHome={myHome} setting={setting} logOut={logOut} user_name={val.user_name} head_path={val.headPath}/>
            )}
        </div>
    }
}

Header.propTypes={
    logOut:PropTypes.func.isRequired,
    setting:PropTypes.func.isRequired,
    myHome:PropTypes.func.isRequired,
    userInfo:PropTypes.arrayOf(PropTypes.shape({
        user_id:PropTypes.number.isRequired,
        user_name:PropTypes.string.isRequired
    }).isRequired).isRequired
};
