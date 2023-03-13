import { AnyAction } from 'redux';
import { INITIAL_STATE, PAYMENT_ACTIONS } from '../constants';

export default function paymentReducer(
    state = INITIAL_STATE.PAYMENT_STATE,
    action: AnyAction
) {
    const { payments, message, error } = action.payload || {};

    switch (action.type) {
        case PAYMENT_ACTIONS.GET_ALL_PAYMENTS_SUCCESS:
            return {
                ...state,
                payments
            };
        case PAYMENT_ACTIONS.GET_ALL_PAYMENTS_SUCCESS:
        case PAYMENT_ACTIONS.PROCESS_PAYMENT_SUCCESS:
            return {
                ...state,
                message
            }
        case PAYMENT_ACTIONS.GET_ALL_PAYMENTS_ERROR:
        case PAYMENT_ACTIONS.PROCESS_PAYMENT_ERROR:
            return {
                ...state,
                error
            }
        case PAYMENT_ACTIONS.CLEAR_STATE:
            return {
                ...state,
                payments: [],
                message: null,
                error: null
            }
        default:
            return state;
    }
}