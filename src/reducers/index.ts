import { combineReducers } from "redux";
import productState from "./productReducer";
import authState from './authReducer';
import paymentState from './paymentReducer';

export default combineReducers({
    productState,
    authState,
    paymentState
})