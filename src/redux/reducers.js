import { combineReducers } from 'redux';
import { imageList } from './Gallery/reducer';
import { auth } from './Auth/reducer';



export default combineReducers({
    auth,
    imageList,
})