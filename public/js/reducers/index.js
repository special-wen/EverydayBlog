import {combineReducers} from 'redux';
import hello from "./hello";
import edit from './edit';
import login from "./login";

export default combineReducers({
    hello,
    edit,
    login
});
