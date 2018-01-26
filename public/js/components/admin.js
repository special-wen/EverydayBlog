/**
 * Created by ubuntu on 18-1-26.
 */
import React from 'react';
import '../../css/admin.css';
import PropTypes from 'prop-types';

function ItemUserList(props) {
    let sex;
    if(props.sex === '0'){
        sex = '女';
    }else{
        sex = '男';
    }
    return <tr onClick={props.onDetial}>
        <td>{props.name}</td>
        <td>{props.major_class}</td>
        <td>{sex}</td>
        <td>{props.github}</td>
        <td>{props.blog}</td>
        <td>{props.time}</td>
        <td>{props.count}</td>
    </tr>
}
export default class Detail extends React.Component {
    componentDidMount(){
        this.props.allUserList();
    }
    render() {
        const {onDetial,userList} = this.props;
        return <div>
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
                    </tr>
                    {userList.map((val)=>
                        <ItemUserList key={val.stu_id} onDetial={onDetial} name={val.stu_name} major_class={val.major_class} sex={val.sex} github={val.github} blog={val.blog} time="" count=""/>
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
        github: PropTypes.string.isRequired
    }).isRequired).isRequired
};