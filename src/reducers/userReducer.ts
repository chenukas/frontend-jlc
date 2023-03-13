import { AnyAction } from 'redux';
import { INITIAL_STATE, USER_ACTIONS } from '../constants';

export default function userReducer(
    state = INITIAL_STATE.USER_STATE,
    action: AnyAction
) {
    const { user, users, message, error } = action.payload || {};

    switch (action.type) {
        case USER_ACTIONS.GET_USER_SUCCESS:
            return {
                ...state,
                user
            };
        case USER_ACTIONS.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                users
            };
        case USER_ACTIONS.UPDATE_USER_SUCCESS:
        case USER_ACTIONS.DELETE_USER_SUCCESS:
            return {
                ...state,
                message
            }
        case USER_ACTIONS.UPDATE_USER_ERROR:
        case USER_ACTIONS.DELETE_USER_ERROR:
            return {
                ...state,
                error
            }
        case USER_ACTIONS.CLEAR_MESSAGE_AND_ERROR:
            return {
                ...state,
                message: null,
                error: null
            }
        case USER_ACTIONS.CLEAR_STATE:
            return {
                ...state,
                user: null,
                users: [],
                message: null,
                error: null
            }
        default:
            return state;
    }
}