/**
 * Created by lmy on 18-2-23.
 */
import {connect} from 'react-redux';
import EditChange from '../components/detail';

const mapStateToProps = (state) => {
    return {
        check: state.edit.check,
        otherlist: state.editList.aList
    }
};

function mapDispatchToProps(dispatch){
    return{
        otherList: () =>{
            const id = localStorage.getItem("user_id");
            // console.log(id);
            dispatch({type:"OTHER_LIST",id:id});
        },
        myonDetials:(e)=>{
            e.stopPropagation();
            const ess_id = e.target.parentNode.id;
            localStorage.setItem("ess_id",ess_id);
            dispatch({type:'ESS_DETIALS',id:ess_id})
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(EditChange);
