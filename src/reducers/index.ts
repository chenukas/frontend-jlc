import { combineReducers } from "redux";
import productState from "./productReducer";
import authState from './authReducer';
import paymentState from './paymentReducer';
import cartState from './cartReducer';
import orderState from './orderReducer';
import userState from './userReducer';
import statisticState from './statisticReducer';

export default combineReducers({
    productState,
    authState,
    paymentState,
    cartState,
    orderState,
    userState,
    statisticState
})