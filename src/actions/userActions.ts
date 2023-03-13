import { USER_ACTIONS } from "../constants";
import { ActionResponse, User } from "../types";


export function getUser(id: string): ActionResponse {
    return {
        type: USER_ACTIONS.GET_USER,
        payload: { id }
    }
}

export function getUserSuccess(user: User): ActionResponse {
    return {
        type: USER_ACTIONS.GET_USER_SUCCESS,
        payload: { user }
    }
}

export function getUserError(error: string): ActionResponse {
    return {
        type: USER_ACTIONS.GET_USER_ERROR,
        payload: { error }
    }
}

export function getAllUsers(): ActionResponse {
    return {
        type: USER_ACTIONS.GET_ALL_USERS,
        payload: {}
    }
}

export function getAllUsersSuccess(users: Array<User>): ActionResponse {
    return {
        type: USER_ACTIONS.GET_ALL_USERS_SUCCESS,
        payload: { users }
    }
}

export function getAllUsersError(error: string): ActionResponse {
    return {
        type: USER_ACTIONS.GET_ALL_USERS_ERROR,
        payload: { error }
    }
}

export function updateUser(id: string, user: User): ActionResponse {
    return {
        type: USER_ACTIONS.UPDATE_USER,
        payload: { id, user }
    }
}

export function updateUserSuccess(message: string): ActionResponse {
    return {
        type: USER_ACTIONS.UPDATE_USER_SUCCESS,
        payload: { message }
    }
}

export function updateUserError(error: string): ActionResponse {
    return {
        type: USER_ACTIONS.UPDATE_USER_ERROR,
        payload: { error }
    }
}

export function deleteUser(id: string): ActionResponse {
    return {
        type: USER_ACTIONS.DELETE_USER,
        payload: { id }
    }
}

export function deleteUserSuccess(message: string): ActionResponse {
    return {
        type: USER_ACTIONS.DELETE_USER_SUCCESS,
        payload: { message }
    }
}

export function deleteUserError(error: string): ActionResponse {
    return {
        type: USER_ACTIONS.DELETE_USER_ERROR,
        payload: { error }
    }
}

export function clearMessageAndError(): ActionResponse {
    return {
        type: USER_ACTIONS.CLEAR_MESSAGE_AND_ERROR,
        payload: {}
    }
}

export function clearState(): ActionResponse {
    return {
        type: USER_ACTIONS.CLEAR_STATE,
        payload: {}
    }
}