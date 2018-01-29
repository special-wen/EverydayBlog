/**
 * Create by zxw on 18-1-28
 */

import {connect} from 'react-redux';
import Home from '../components/home';

const mapStateProps = (state)=>{
    console.log(state);
    return{

    }
};
const mapDispathchToProps = (dispatch) =>({

});
export default connect(mapStateToProps, mapDispatchToProps)(Home);