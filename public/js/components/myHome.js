/**
 * Created by lmy on 18-2-4.
 */
import React from 'react';
import PropTypes from 'prop-types';

function Itemlist(props) {
    return <li id={props.id} title={props.content} onClick={props.getInfo}>
        <a href="#">{props.value}</a>
    </li>
}
export default class EditChange extends React.Component {
    componentDidMount(){
        this.props.allList();
    }
    render() {
        const {list,getInfo} = this.props;
        return <div>
            <div className="Head">
                <img src="../../images/photo.jpeg" width={60} height={50}/>
                用户名
            </div>
            <div>
                <p>我的主页</p>
                <ul>
                    {list.map((val)=>
                        <Itemlist key={val.ess_id} getInfo={getInfo}  content={val.text} id={val.ess_id} value={val.title}/>
                    )}
                </ul>
            </div>
        </div>
    }
}
EditChange.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        ess_id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    //获取单独的点击信息，将id与check关联，成为待删除和带更新状态
    getInfo: PropTypes.func.isRequired,
    //利用className将id绑定到删除更新按钮
    check: PropTypes.string.isRequired,
};