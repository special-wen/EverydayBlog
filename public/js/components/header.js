/**
 * Created by zxw on 18-2-03.
 */

import React from 'react';
import PropTypes from 'prop-types';
function UserInfo(props) {
    console.log(props.user_name);
    return <p>{props.user_name}</p>
}
export default class Header extends React.Component{
    componentDidMount(){
        this.props.UserInfo();
    }
    render(){
        const {userInfos} = this.props;
        return <div>
            {userInfos.map((val)=>
                <UserInfo key = {val.user_id} user_name={val.user_name}/>
            )}
        </div>
    }
}

Header.propTypes={
    userInfos:PropTypes.arrayOf(PropTypes.shape({
        user_id:PropTypes.number.isRequired,
        user_name:PropTypes.string.isRequired
    }).isRequired).isRequired
};
