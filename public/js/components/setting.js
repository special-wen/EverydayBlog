/**
 * Created by ubuntu on 18-1-29.
 */
import React from 'react';
import '../../css/sign.css';
import PropTypes from 'prop-types';
import FileInput from 'react-file-input';
export default class Setting extends React.Component {
    componentDidMount(){
        this.props.userINFO();
    }
    render() {
        const {onClickFixInfo,onSavePathClick,onChange,username,password,realName,major_class,github,blog,id,headPath,sex} = this.props;
        //性别需重新定义，不是之前的状态
        return <div>
            <form>
                <label htmlFor="name">用户名：</label>
                <input onChange={onChange} value={username} type="text" name="name" id="name"/>
                <br />
                <label htmlFor="password">密码：</label>
                <input onChange={onChange} value={password} type="password" name="password" id="password" />
                <br />
                <img id="image" src={headPath}/><br/>
                <FileInput type="file" name="myImage" accept=".png,.gif,.jpg" placeholder="点击修改头像" onChange={onSavePathClick}/>
                <label htmlFor="name">真实姓名：</label>
                <input onChange={onChange} value={realName} type="text" name="realName" id="realName"/>
                <br />
                <label htmlFor="major">专业班级：</label>
                <input onChange={onChange} value={major_class} type="text" name="major" id="major" />
                <br />
                <label htmlFor="sex">性别</label>
                <input onChange={onChange} value={sex} type="text" name="sex" id="sex"/>
                <span  id="normal">**请填入男或女(默认为男生)**</span>
                <br />
                <label htmlFor="gitAddress">github地址：</label>
                <input onChange={onChange} value={github} type="text" name="gitAddress" id="gitAddress"/>
                <br />
                <label htmlFor="blogAddress">博客地址：</label>
                <input onChange={onChange} value={blog} type="text" name="blogAddress" id="blogAddress" />
                <br />
                <input id={id} type="button" value="提交" onClick={onClickFixInfo} />
            </form>
        </div>
    }
};
Setting.propTypes = {
    onClickFixInfo: PropTypes.func.isRequired,
    onSavePathClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};