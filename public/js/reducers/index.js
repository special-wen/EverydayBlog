import {combineReducers} from 'redux';
import hello from "./hello";
import edit from './edit';

export default combineReducers({
    hello,
    edit
});
