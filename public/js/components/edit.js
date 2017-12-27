/**
 * Created by lmy on 17-8-21.
 */
import React from 'react';
import marked from 'marked';
import '../../css/edit.css';


function Itemlist(props) {
    return <li id={props.id} title={props.content} onClick={props.getInfo}>
                <a href="#">{props.value}</a>
            </li>
}

export default class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            text: ''
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
    deleteEdit() {
        const id = this.state.id;
        this.props.onDeleteEdit({id:id});
        this.setState({
            text: marked(""),
            title: marked("")
        });
        document.getElementsByClassName("editTitle")[0].value = "";
        document.getElementsByClassName("editText")[0].value = "";
        this.props.allList();
    }

    handleClick() {
        const title = document.getElementsByClassName("editTitle")[0].value;
        const text = document.getElementsByClassName("editText")[0].value;
        if(title !== "" && text !== ""){
            this.props.buttonClick({title, text});
            this.props.allList();
        }else{
            alert("标题和内容不能为空");
        }
        this.setState({
            text: marked(""),
            title: marked("")
        });
        document.getElementsByClassName("editTitle")[0].value = "";
        document.getElementsByClassName("editText")[0].value = "";
    }

    handelContentChange(e) {
        this.setState({
            text: marked(e.target.value)
        });
    }

    handelTitleChange(e) {
        this.setState({
            title: marked(e.target.value)
        });

    }
    componentWillMount(){
        this.props.allList();
    }
   render() {
       const Items = this.props.list;
        return (
            <div>
                <div className="Head">
                    <img src="../../images/photo.jpeg" width={60} height={50}/>
                    用户名
                    <button onClick={this.handleClick.bind(this)}>发布</button>
                    <button onClick={this.deleteEdit.bind(this)}>删除</button>
                </div>
                <div className="articlelist">
                    <p>我的文章</p>
                    <ul>
                        {Items.map((val)=>
                            <Itemlist key={val.id} getInfo={this.getInfo.bind(this)} content={val.text} id={val.id} value={val.title}/>
                        )}
                    </ul>
                </div>


                <div className="editArea">
                    <textarea className="editTitle" onChange={this.handelTitleChange.bind(this)} ref="title"/>

                    <textarea className="editText" onChange={this.handelContentChange.bind(this)} ref='text'/>

                </div>

                <div className="show">
                    <div className="showTitle">
                        <div className='markdown-rendered-contect'
                             dangerouslySetInnerHTML={{__html: this.state.title}}/>
                    </div>

                    <div className="showText">
                        <div className='markdown-rendered-contect'
                             dangerouslySetInnerHTML={{__html: this.state.text}}/>
                    </div>

                </div>

            </div>
        );
    }
}