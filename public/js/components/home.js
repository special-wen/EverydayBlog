/**
 * Created by zxw on 18-1-26.
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class Home extends React.Component{
    componentDidMount(){
        this.props.allEssayList();
    }
    render(){
        return <div>
            <table>
                <tr>
                    <th>姓名</th>
                    <th>文章标题</th>
                    <th>文章内容</th>
                    <th>发布时间</th>
                </tr>
                {essayList.map((val)=>
                    <ItemEssayList key={val.ese_id} name={val.name} title={val.title} text={val.text} date={val.date}/>
                )}
            </table>
        </div>
    }
}
Home.propTypes={
    
}