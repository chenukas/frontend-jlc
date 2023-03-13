import { STATISTIC_ACTIONS } from "../constants";
import { ActionResponse } from "../types";


export function getUserStatistics(): ActionResponse {
    return {
        type: STATISTIC_ACTIONS.GET_USER_STATISTIC,
        payload: {}
    }
}

export function getUserStatisticsSuccess(userStats: any): ActionResponse {
    return {
        type: STATISTIC_ACTIONS.GET_USER_STATISTIC_SUCCESS,
        payload: { userStats }
    }
}

export function getUserStatisticsError(error: string): ActionResponse {
    return {
        type: STATISTIC_ACTIONS.GET_USER_STATISTIC_ERROR,
        payload: { error }
    }
}

export function getOrderStatistics(): ActionResponse {
    return {
        type: STATISTIC_ACTIONS.GET_ORDER_STATISTIC,
        payload: {}
    }
}

export function getOrderStatisticsSuccess(orderStats: any): ActionResponse {
    return {
        type: STATISTIC_ACTIONS.GET_ORDER_STATISTIC_SUCCESS,
        payload: { orderStats }
    }
}

export function getOrderStatisticsError(error: string): ActionResponse {
    return {
        type: STATISTIC_ACTIONS.GET_ORDER_STATISTIC_ERROR,
        payload: { error }
    }
}