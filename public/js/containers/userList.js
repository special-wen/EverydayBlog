import UserList from '../components/userList'
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        user:state.userList.user,
        deleteFlag:state.userList.deleteFlag,
        updateFlag:state.userList.updateFlag,
        findFlag : state.userList.findFlag,

    }
}

const mapDispatchTOProps = (dispatch) => {
    return {
        OnDisplayUsers : () => {
            dispatch({type:"SELECT_USER"})
        },
        onDeleteUser: (id) => {
            dispatch({type: "DELETE_USER", id});
        },
        onModifyUser: (user) => {
            dispatch({type: "UPDATE_USER", user});
        },
        onFindUser : (findUserName) => {
            dispatch({type:"FIND_USER",findUserName});
        }
    }
}


export default connect(mapStateToProps,mapDispatchTOProps)(UserList);