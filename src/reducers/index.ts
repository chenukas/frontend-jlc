import { combineReducers } from "redux";
import productState from "./productReducer";
import authState from './authReducer';

export default combineReducers({
    productState,
    authState
})