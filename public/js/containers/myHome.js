/**
 * Created by lmy on 18-2-4.
 */
import {connect} from 'react-redux';
import EditChange from '../components/myHome';
import { editList } from '../action';

const mapStateToProps = (state) => {
    return {
        check: state.edit.check,
        mylist: state.editList.aList
    }
};

function mapDispatchToProps(dispatch){
    return{
        allList: () =>{
            dispatch(editList());
        },
        myonDetials:(e)=>{
            e.stopPropagation();
            const ess_id = e.target.parentNode.id;
            localStorage.setItem("ess_id",ess_id);
            let aaa = localStorage.getItem("ess_id");
            alert(ess_id + aaa);
            dispatch({type:'ESS_DETIALS',id:ess_id})
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(EditChange);
