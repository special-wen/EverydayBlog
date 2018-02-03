/**
 * Created by zxw on 18-2-03
 */
import {connect} from 'react-redux';
import Header from '../components/header';

const mapStateToProps = (state)=>{
    return{
        userInfos:state.userInfo.aList,

    };
};

const mapDispatchToProps = (dispatch)=>({
    UserInfo:()=>{
        dispatch({type:"USER_INFO"})
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);