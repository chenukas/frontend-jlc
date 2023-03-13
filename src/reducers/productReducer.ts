import { AnyAction } from 'redux';
import { INITIAL_STATE, PRODUCT_ACTIONS } from '../constants';

export default function productReducer(
    state = INITIAL_STATE.PRODUCT_STATE,
    action: AnyAction
) {
    const { products, product, message, error } = action.payload || {};

    switch (action.type) {
        case PRODUCT_ACTIONS.GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                products
            };
        case PRODUCT_ACTIONS.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                product
            }
        case PRODUCT_ACTIONS.CLEAR_PRODUCT:
            return {
                ...state,
                product: null
            }
        case PRODUCT_ACTIONS.CREATE_PRODUCT_SUCCESS:
        case PRODUCT_ACTIONS.UPDATE_PRODUCT_SUCCESS:
        case PRODUCT_ACTIONS.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                message
            }
        case PRODUCT_ACTIONS.GET_ALL_PRODUCTS_ERROR:
        case PRODUCT_ACTIONS.GET_PRODUCT_ERROR:
        case PRODUCT_ACTIONS.CREATE_PRODUCT_ERROR:
        case PRODUCT_ACTIONS.UPDATE_PRODUCT_ERROR:
        case PRODUCT_ACTIONS.DELETE_PRODUCT_ERROR:
            return {
                ...state,
                error
            }
        case PRODUCT_ACTIONS.CLEAR_STATE:
            return {
                ...state,
                product: null,
                message: null,
                error: null
            }
        default:
            return state;
    }
}