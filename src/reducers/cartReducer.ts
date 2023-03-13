import { AnyAction } from 'redux';
import { INITIAL_STATE, CART_ACTIONS } from '../constants';

export default function cartReducer(
    state = INITIAL_STATE.CART_STATE,
    action: AnyAction
) {
    const { cart, message, error } = action.payload || {};

    switch (action.type) {
        case CART_ACTIONS.GET_CART_SUCCESS:
            return {
                ...state,
                id: cart._id,
                userId: cart.userId,
                products: cart.products,
                qty: cart.qty,
                total: cart.total
            };
        case CART_ACTIONS.UPDATE_LOCAL_CART:
            return {
                ...state,
                products: cart.products,
                qty: cart.qty,
                total: cart.total
            };
        case CART_ACTIONS.UPDATE_LOCAL_CART:
            return {
                ...state,
                products: cart.products,
                qty: cart.qty,
                total: cart.total
            };
        case CART_ACTIONS.DELETE_CART_SUCCESS:
            return {
                ...state,
                message,
                id: null,
                userId: null,
                products: [],
                qty: 0,
                total: 0
            }
        case CART_ACTIONS.SAVE_CART_SUCCESS:
        case CART_ACTIONS.UPDATE_CART_SUCCESS:
            return {
                ...state,
                message
            }
        case CART_ACTIONS.SAVE_CART_ERROR:
        case CART_ACTIONS.UPDATE_CART_ERROR:
        case CART_ACTIONS.DELETE_CART_ERROR:
            return {
                ...state,
                error
            }
        default:
            return state;
    }
}