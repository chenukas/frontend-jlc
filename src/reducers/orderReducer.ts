import { AnyAction } from 'redux';
import { INITIAL_STATE, ORDER_ACTIONS } from '../constants';

export default function orderReducer(
    state = INITIAL_STATE.ORDER_STATE,
    action: AnyAction
) {
    const { orders, message, error } = action.payload || {};

    switch (action.type) {
        case ORDER_ACTIONS.GET_ORDERS_SUCCESS:
        case ORDER_ACTIONS.GET_ALL_ORDERS_SUCCESS:
            return {
                ...state,
                orders
            };
        case ORDER_ACTIONS.CREATE_ORDER_SUCCESS:
        case ORDER_ACTIONS.UPDATE_ORDER_SUCCESS:
        case ORDER_ACTIONS.DELETE_ORDER_SUCCESS:
            return {
                ...state,
                message
            }
        case ORDER_ACTIONS.CREATE_ORDER_ERROR:
        case ORDER_ACTIONS.UPDATE_ORDER_ERROR:
        case ORDER_ACTIONS.DELETE_ORDER_ERROR:
            return {
                ...state,
                error
            }
        default: 
            return state;
    }
}