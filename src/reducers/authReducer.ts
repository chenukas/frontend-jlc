import { AnyAction } from 'redux';
import { INITIAL_STATE, PRODUCT_ACTIONS } from '../constants';

export default function authReducer(
    state = INITIAL_STATE.AUTH_STATE,
    action: AnyAction
) {
    const { products, product, message, error } = action.payload || {};

    switch (action.type) {
        default: 
            return state;
    }
}