/**
 * Created by lmy on 18-2-4.
 */
import {connect} from 'react-redux';
import EditChange from '../components/myHome';
import { editList } from '../action';

const mapStateToProps = (state) => {
    return {
        check: state.edit.check,
        list: state.editList.aList
    }
};

function mapDispatchToProps(dispatch){
    return{
        allList: () =>{
            dispatch(editList());
        },//项目的列表
        getInfo: (e) => {
            const check=e.target.parentNode.id;
            const text=e.target.parentNode.title;
            const title=e.target.innerText;
            // document.getElementsByClassName("editText")[0].value = text;
            // document.getElementsByClassName("editTitle")[0].value = title;
            // dispatch(showInfo({check:check,text:text,title:title}));
        },//点击列表之后的信息
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(EditChange);
