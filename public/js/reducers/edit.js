/**
 * Created by lmy on 17-8-21.
 */
import marked from 'marked';
//管理markdown改变事件的触发，markdown转换成html语法
export default (state = {check:'',title:'',text:''}, action) => {
    switch(action.type){
        case 'TITLE_CHANGE':
        case 'TEXT_CHANGE':
            return {check:action.check,title:marked(action.title),text:marked(action.text)};
        case 'SHOW_INFO':
            return {check:action.data.check,title:marked(action.data.title),text:marked(action.data.text)};
        case 'CLEAR_CHECK':
            return {check:action.check,title:action.title,text:action.text};
        default:
            return state;
    }
}