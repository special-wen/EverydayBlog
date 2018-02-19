/**
 * Created by lmy on 17-8-21.
 */

import {connect} from 'react-redux';
import EditChange from '../components/editChange';
import { editTitleChange } from '../action';
import { editTextChange } from '../action';
import { editList } from '../action';
import { showInfo } from '../action';
import { editPublish } from '../action';
import { editDelete } from '../action';
import { clearCheck } from '../action';

const mapStateToProps = (state) => {
    return {
        title: state.edit.title,
        text: state.edit.text,
        check: state.edit.check,
        list: state.editList.aList
    }
};

function mapDispatchToProps(dispatch){
    return{
        allList: () =>{
            dispatch(editList());
        },//项目的列表
        handelTitleChange: (e) => {
            //保留check,维持更新或发布状态（当未点击标题时，维持其发布状态，否则，维持其更新状态）
            //check通过title传递
            const check = e.target.title;
            const text = document.getElementsByClassName("editText")[0].value;
            dispatch(editTitleChange(check,e.target.value,text));
        },//内容标题markdown同步
        handelContentChange: (e) => {
            const check = e.target.title;
            const title= document.getElementsByClassName("editTitle")[0].value;
             dispatch(editTextChange(check,e.target.value,title));
        },//内容改变markdown同步
        getInfo: (e) => {
            const check=e.target.parentNode.id;
            const text=e.target.parentNode.title;
            const title=e.target.innerText;
            document.getElementsByClassName("editText")[0].value = text;
            document.getElementsByClassName("editTitle")[0].value = title;
            dispatch(showInfo({check:check,text:text,title:title}));
        },//点击列表之后的信息
        buttonClick: (e) => {
            const text= document.getElementsByClassName("editText")[0].value;
            const title= document.getElementsByClassName("editTitle")[0].value;
            if(title === ''){
                alert("标题不能为空");
            }else{
                //check通过className传递（判断）
                if(e.target.className === ''){
                    alert("发布成功～～～～");

                }else{
                    alert("更新成功～～～～");
                }
                dispatch(editPublish(e.target.className,title,text));
            }
        },//发布action
        deleteEdit: (e) =>{
            if(e.target.className===''){
                alert('请点击要删除的文章的标题～～～');
            }else{
                const check = e.target.className;
                //点击文章标题之后，待删除与待更新的check同步，删除时，应清空更新的check,使其处于发布状态
                document.getElementsByClassName(check)[0].className='';
                dispatch(editDelete(check));
                //删除后，数据库没有数据，重加载列表后，没有待删除项，将check置空
                e.target.className='';
                //删除操作结束后，界面处于待编辑发布状态
                document.getElementsByClassName("editText")[0].value = '';
                document.getElementsByClassName("editTitle")[0].value = '';
                document.getElementsByClassName("markdown-rendered-contect")[0].innerText = '';
                document.getElementsByClassName("markdown-rendered-contect")[1].innerText = '';
            }
        },//删除后数据库和列表的改变
        newEdit: (e) => {
            document.getElementsByClassName("editTitle")[0].focus();
            document.getElementsByClassName("editText")[0].value = '';
            document.getElementsByClassName("editTitle")[0].value = '';
            //没有className，默认为是空子符串，清空显示框的值
            dispatch(clearCheck(e.target.className,'',''));
        }
    }

}
const ChangeLink = connect(mapStateToProps, mapDispatchToProps)(EditChange);

export default ChangeLink;