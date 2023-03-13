import { AnyAction } from 'redux';
import { INITIAL_STATE, AUTH_ACTIONS } from '../constants';

export default function authReducer(
    state = INITIAL_STATE.AUTH_STATE,
    action: AnyAction
) {
    const { user, message, error } = action.payload || {};

    switch (action.type) {
        case AUTH_ACTIONS.LOGIN_SUCCESS:
            return {
                ...state,
                user,
                message
            };
        case AUTH_ACTIONS.REGISTER_SUCCESS:
            return {
                ...state,
                message
            };
        case AUTH_ACTIONS.LOGIN_ERROR:
        case AUTH_ACTIONS.REGISTER_ERROR:
            return {
                ...state,
                error
            };
        case AUTH_ACTIONS.LOGOUT_SUCCESS:
            return {
                ...state,
                user: null,
                message: null,
                error: null
            }
        case AUTH_ACTIONS.CLEAR_MESSAGE_AND_ERROR:
            return {
                ...state,
                message: null,
                error: null
            }
        case AUTH_ACTIONS.CLEAR_STATE:
            return {
                ...state,
                user: null,
                message: null,
                error: null
            }
        default:
            return state;
    }
}