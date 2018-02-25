/**
 * Created by lmy on 18-2-12.
 */
import {connect} from 'react-redux';
import Essay from '../components/essay';
import {ess} from "../action/index";
const mapStateToProps = (state)=>{
    return{
        essayInfo:state.editList.aList
    };
};

const mapDispatchToProps = (dispatch) =>({
    allEssayInfo:()=>{
        const id = localStorage.getItem("ess_id");
        console.log(id);
        dispatch({type:"ALL_ESSAY_INFO",id:id});
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Essay);
