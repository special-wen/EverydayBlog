/**
 * Created by zxw on 18-1-26.
 */

import React from 'react';
import PropTypes from 'prop-types';
import '../../css/home.css';

function UserInfo(props) {
    console.log(props.user_name+props.headPath);
    if (props.headPath == null){
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
function ItemEssayList(props) {
    // console.log(props.name);
    console.log(props.session_name);
    // if (props.name != undefined){
        return <tr id={props.check} onClick={props.onDetials}>
            <td>{props.name}</td>
            <td>{props.title}</td>
            <td id = "text">{props.text}</td>
            <td>{props.date}</td>
        </tr>
    // }else {
    //     return;
    // }
}


export default class Home extends React.Component{
    componentDidMount(){
        this.props.allEssayList();
    }
    render(){
        const {onDetials,essayList,userInfo,myHome,setting,logOut} = this.props;
        return <div>
            <div>
                {userInfo.map((val)=>
                    <UserInfo key = {val.user_id} myHome={myHome} setting={setting} logOut={logOut} user_name={val.user_name} head_path={val.headPath}/>
                )}
            </div>
            <table id= "table">
                <tbody>
                    <tr>
                        <th>姓名</th>
                        <th>文章标题</th>
                        <th>文章内容</th>
                        <th>发布时间</th>
                        <th>session_name</th>
                    </tr>
                    {essayList.map((val)=>
                        <ItemEssayList key={val.ess_id} onDetials={onDetials} name={val.name} title={val.title} text={val.text} date={val.date}/>
                    )}
                </tbody>
            </table>
        </div>
    }
}
Home.propTypes={
    logOut:PropTypes.func.isRequired,
    setting:PropTypes.func.isRequired,
    myHome:PropTypes.func.isRequired,
    userInfo:PropTypes.arrayOf(PropTypes.shape({
        user_id:PropTypes.number.isRequired,
        user_name:PropTypes.string.isRequired
    }).isRequired).isRequired,
    onDetials:PropTypes.func.isRequired,
    essayList:PropTypes.arrayOf(PropTypes.shape({
        ess_id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired,
        date:PropTypes.string.isRequired,
    }).isRequired).isRequired,
};