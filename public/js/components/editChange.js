import React from 'react';
import '../../css/edit.css';
import PropTypes from 'prop-types';

function Itemlist(props) {
    return <div id={props.id} title={props.content} onClick={props.getInfo}>
        <a href="#">{props.value}</a>
    </div>
}
export default class EditChange extends React.Component {
    componentDidMount(){
        this.props.allList();
    }
    render() {
        const {check,buttonClick,deleteEdit,handelTitleChange,handelContentChange,title,text,list,getInfo,newEdit} = this.props;
        return <div>
            <div className="Head">
                <button className={check} onClick={buttonClick}>发布</button>
                <button className={check} onClick={deleteEdit}>删除</button>
                <button onClick={newEdit}>新建</button>
            </div>
            <div className="articlelist">
                <p>我的文章</p>
                <ul id="userHeaderList">
                    {list.map((val)=>
                        <Itemlist key={val.ess_id} getInfo={getInfo}  content={val.text} id={val.ess_id} value={val.title}/>
                    )}
                </ul>
            </div>
            <div className="editArea">
                <textarea className="editTitle"  title={check} onChange={handelTitleChange} ref="title"/>

                <textarea className="editText" title={check} onChange={handelContentChange} ref='text'/>

            </div>

            <div className="show">
                <div className="showTitle">
                    <div className='markdown-rendered-contect'
                         dangerouslySetInnerHTML={{__html: title}}/>
                </div>

                <div className="showText">
                    <div className='markdown-rendered-contect'
                         dangerouslySetInnerHTML={{__html: text}}/>
                </div>

            </div>
        </div>
    }
}
EditChange.propTypes = {
    //内容改变时，相应变化，保持check，使其保持更新或新建状态
    handelTitleChange: PropTypes.func.isRequired,
    handelContentChange: PropTypes.func.isRequired,
    //返回对应的markdown内容
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    //标题列表的展现
    list: PropTypes.arrayOf(PropTypes.shape({
        ess_id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    //获取单独的点击信息，将id与check关联，成为待删除和带更新状态
    getInfo: PropTypes.func.isRequired,
    //发布函数
    buttonClick: PropTypes.func.isRequired,
    //利用className将id绑定到删除更新按钮
    check: PropTypes.string.isRequired,
    //新建文章时，清空编辑框和check,使其处于待发布状态
    newEdit: PropTypes.func.isRequired
};
