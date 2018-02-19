import {combineReducers} from 'redux';
import hello from "./hello";
import edit from './edit';
import editList from './editList';
import setting from './setting';
import userInfo from './userInfo';
//管理状态reducer的整合
export default combineReducers({
    hello,
    edit,
    editList,
    setting,
    userInfo
});
