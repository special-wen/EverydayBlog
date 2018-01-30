/**
 * Created by zxw on 18-01-29.
 */
import React from 'react';
import PropTypes from 'prop-types';

function ItemEssayList(props) {
    return <tr onClick={props.onDetial}>
        <td>{props.name}</td>
        <td>{props.title}</td>
        <td>{props.text}</td>
    </tr>
}

export default class Home extends React.Component{
    componentDidMount(){
        this.props.allEssayList();
    }
    render(){
        const {onDetial,essayList} = this.props;
        return <div>
            <table id="table">
                <tbody>
                <tr>
                    <th>姓名</th>
                    <th>文章标题</th>
                    <th>文章内容</th>
                </tr>
                {essayList.map((val)=>
                    <ItemEssayList key={val.stu_id} onDetial={onDetial} name={val.stu_name} title={ val.title} text={val.text}/>
                )}
                </tbody>
            </table>
        </div>
    }
}
Home.propTypes = {
    onDetial:PropTypes.func.isRequired,
    essayList:PropTypes.arrayOf(PropTypes.shape({
        stu_id:PropTypes.number.isRequired,
        stu_name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired
};