/**
 * Created by zxw on 18-1-22.
 */

import React from 'react';
function Itemlist(props) {
    return <li id={props.id} title={props.content} onClick={props.getInfo}>
        <a href="#">{props.value}</a>
    </li>
}

export default class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:null,
            title:'',
            text:''
        }
    }
    getInfo(event){
        const id=event.target.parentNode.id;
        const text=event.target.parentNode.title;
        const title=event.target.innerText;
        this.setState({
            id: id
        });
        this.setState({
            text: marked(text),
            title: marked(title)
        });
        document.getElementsByClassName("editTitle")[0].value = title;
        document.getElementsByClassName("editText")[0].value = text;
    }
    render() {
        const Items = this.props.list;
        return (
            <div>
                <div className="header">
                    <img className="headPath" src="" alt=""/>
                    <p className="userName"></p>
                </div>
                <div className="essayList">
                    <ul>
                        {Items.map((val) =>
                            <Itemlist key={val.id} getInfo={this.getInfo.bind(this)} content={val.text} id={val.id} value={val.title}/>

                        )}
                    </ul>
                </div>
            </div>
        );
    }
}