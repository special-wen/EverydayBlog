import {combineReducers} from 'redux';
import hello from "./hello";
import edit from './edit';
import editList from './editList';
//管理状态reducer的整合
export default combineReducers({
    hello,
    edit,
    editList
});
