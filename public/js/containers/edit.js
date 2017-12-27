/**
 * Created by lmy on 17-8-21.
 */

import {connect} from 'react-redux';
import Edit from '../components/edit';

// function mapStateToProps(state) {
//     return{
//         edit:state.edit.editInfo,
//         deleteFlag:state.edit.deleteFlag,
//         updateFlag:state.edit.updateFlag,
//         list:state.edit.list
//     }
//
// }

const mapStateToProps = (state) => {
    return {
        list: state.edit.aList
    }
};

function mapDispatchToProps(dispatch){
    return{
        allList: () =>{
          dispatch({type:"ALL_LIST"})
        },
        buttonClick: (editInfo) => {
            dispatch({type:'BUTTON_CLICK',data:editInfo})
        },
        onDeleteEdit: (id) => {
            dispatch({type: "DELETE_USER",id});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);