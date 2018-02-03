/**
 * Created by zxw on 18-1-26.
 */

import React from 'react';
import PropTypes from 'prop-types';
import '../../css/home.css';

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
        const {onDetials,essayList} = this.props;
        return <div>
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
    onDetials:PropTypes.func.isRequired,
    essayList:PropTypes.arrayOf(PropTypes.shape({
        ess_id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired,
        date:PropTypes.string.isRequired,
    }).isRequired).isRequired,
};