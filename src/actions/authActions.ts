import { AUTH_ACTIONS } from "../constants";
import { ActionResponse, User } from "../types";


export function login(username: string, password: string): ActionResponse {
    return {
        type: AUTH_ACTIONS.LOGIN,
        payload: {username, password}
    }
}

export function loginSuccess(user: any, message: string): ActionResponse {
    return {
        type: AUTH_ACTIONS.LOGIN_SUCCESS,
        payload: { user, message }
    }
}

export function loginError(error: string): ActionResponse {
    return {
        type: AUTH_ACTIONS.LOGIN_ERROR,
        payload: { error }
    }
}

export function register(user: User): ActionResponse {
    return {
        type: AUTH_ACTIONS.REGISTER,
        payload: { user }
    }
}

export function registerSuccess(message: string): ActionResponse {
    return {
        type: AUTH_ACTIONS.REGISTER_SUCCESS,
        payload: { message }
    }
}

export function registerError(error: string): ActionResponse {
    return {
        type: AUTH_ACTIONS.REGISTER_ERROR,
        payload: { error }
    }
}

export function logout(): ActionResponse {
    return {
        type: AUTH_ACTIONS.LOGOUT,
        payload: {}
    }
}

export function logoutSuccess(): ActionResponse {
    return {
        type: AUTH_ACTIONS.LOGOUT_SUCCESS,
        payload: {}
    }
}

export function clearMessageAndError(): ActionResponse {
    return {
        type: AUTH_ACTIONS.CLEAR_MESSAGE_AND_ERROR,
        payload: {}
    }
}

export function clearState(): ActionResponse {
    return {
        type: AUTH_ACTIONS.CLEAR_STATE,
        payload: {}
    }
}