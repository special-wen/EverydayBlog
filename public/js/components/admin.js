/**
 * Created by ubuntu on 18-1-26.
 */
import React from 'react';
import '../../css/admin.css';
import PropTypes from 'prop-types';

function ItemUserList(props) {
    let sex,classType;
    if(props.sex === '0'){
        sex = '女';
    }else{
        sex = '男';
    }
    if(props.type === '1'){
        classType = '管理员';
        return <tr id={props.check} onClick={props.onDetial}>
            <td>{props.name}</td>
            <td>{props.major_class}</td>
            <td>{sex}</td>
            <td>{props.github}</td>
            <td>{props.blog}</td>
            <td>{props.time}</td>
            <td>{props.count}</td>
            <td>{classType}<button onClick={props.onChangeType}>-</button></td>
            <td><button id="delete" onClick={props.onDelete}>删除</button></td>
        </tr>
    }else{
        classType = '普通用户';
        return <tr id={props.check} onClick={props.onDetial}>
            <td>{props.name}</td>
            <td>{props.major_class}</td>
            <td>{sex}</td>
            <td>{props.github}</td>
            <td>{props.blog}</td>
            <td>{props.time}</td>
            <td>{props.count}</td>
            <td>{classType}<button onClick={props.onChangeType}>+</button></td>
            <td><button id="delete" onClick={props.onDelete}>删除</button></td>
        </tr>
    }
}
export default class Detail extends React.Component {
    componentDidMount(){
        this.props.allUserList();
    }
    render() {
        const {onDetial,userList,onDelete,onChangeType} = this.props;
        return <div>
            <p className="check">**普通用户点击<button>+</button>可升级为管理员,管理员点击<button>-</button>可成为普通用户**</p>
            <table id="table">
                <tbody>
                <tr>
                    <th>姓名</th>
                    <th>专业班级</th>
                    <th>性别</th>
                    <th>github地址</th>
                    <th>blog地址</th>
                    <th>最新发布时间</th>
                    <th>发布文章总数</th>
                    <th>用户类型</th>
                    <th>是否移除</th>
                </tr>
                {userList.map((val)=>
                    <ItemUserList key={val.stu_id} check={val.stu_id} onDetial={onDetial} onDelete={onDelete} name={val.stu_name} major_class={val.major_class} sex={val.sex} type={val.type} github={val.github} blog={val.blog} time={val.date} count={val.count} onChangeType={onChangeType}/>
                )}
                </tbody>
            </table>
        </div>
    }
}
Detail.propTypes = {
    onDetial: PropTypes.func.isRequired,
    userList: PropTypes.arrayOf(PropTypes.shape({
        stu_id: PropTypes.number.isRequired,
        stu_name: PropTypes.string.isRequired,
        major_class: PropTypes.string.isRequired,
        sex: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onChangeType: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};
