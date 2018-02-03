/**
 * Created by zxw on 18-1-26.
 */

import React from 'react';
import PropTypes from 'prop-types';
import '../../css/home.css';

function ItemEssayList(props) {
    if (props.head === null){
        return <div id = "content">
            <ul>
                <li>{props.name}</li>
                <li><img src="../../images/photo.jpeg" alt="" width={30} height={30}/></li>
                <li onClick={props.onDetials}>{props.title}</li>
                <li>{props.text}</li>
                <li>{props.date}</li>
            </ul>
            <hr/>
        </div>
    }


}


export default class Home extends React.Component{
    componentDidMount(){
        this.props.allEssayList();
    }
    render(){
        const {onDetials,essayList} = this.props;
        return <div>
                {essayList.map((val)=>
                    <ItemEssayList key={val.ess_id} onDetials={onDetials} name={val.name} title={val.title} text={val.text} date={val.date} head={val.head}/>
                )}
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