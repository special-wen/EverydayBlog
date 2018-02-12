/**
 * Created by zxw on 18-2-11.
 */

import {connect} from 'react-redux';
import Essay from '../components/essay';

const mapStateToProps = (state)=>{
    return{
        essayInfo:state.essayInfo.aList,
    };
};

const mapDispatchToProps = (dispatch=>{
    allEssayInfo:()=>{
        const ess_id = localStorage.getItem("ess_id");
        dispatch({type:'ALL_ESSAY_INFO',id:ess_id})
    };
});

export default connect(mapStateToProps,mapDispatchToProps)(Essay);
