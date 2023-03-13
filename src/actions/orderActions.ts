import { ORDER_ACTIONS } from "../constants";
import { ActionResponse, Order } from "../types";


export function getOrders(id: string): ActionResponse {
    return {
        type: ORDER_ACTIONS.GET_ORDERS,
        payload: { id }
    }
}

export function getOrdersSuccess(orders: Array<Order>): ActionResponse {
    return {
        type: ORDER_ACTIONS.GET_ORDERS_SUCCESS,
        payload: { orders }
    }
}

export function getOrdersError(error: string): ActionResponse {
    return {
        type: ORDER_ACTIONS.GET_ORDERS_ERROR,
        payload: { error }
    }
}

export function getAllOrders(): ActionResponse {
    return {
        type: ORDER_ACTIONS.GET_ALL_ORDERS,
        payload: {}
    }
}

export function getAllOrdersSuccess(orders: Array<Order>): ActionResponse {
    return {
        type: ORDER_ACTIONS.GET_ALL_ORDERS_SUCCESS,
        payload: { orders }
    }
}

export function getAllOrdersError(error: string): ActionResponse {
    return {
        type: ORDER_ACTIONS.GET_ALL_ORDERS_ERROR,
        payload: { error }
    }
}

export function createOrder(order: Order): ActionResponse {
    return {
        type: ORDER_ACTIONS.CREATE_ORDER,
        payload: { order }
    }
}

export function createOrderSuccess(message: string): ActionResponse {
    return {
        type: ORDER_ACTIONS.CREATE_ORDER_SUCCESS,
        payload: { message }
    }
}

export function createOrderError(error: string): ActionResponse {
    return {
        type: ORDER_ACTIONS.CREATE_ORDER_ERROR,
        payload: { error }
    }
}

export function updateOrder(id: string, order: Order): ActionResponse {
    return {
        type: ORDER_ACTIONS.UPDATE_ORDER,
        payload: { id, order }
    }
}

export function updateOrderSuccess(message: string): ActionResponse {
    return {
        type: ORDER_ACTIONS.UPDATE_ORDER_SUCCESS,
        payload: { message }
    }
}

export function updateOrderError(error: string): ActionResponse {
    return {
        type: ORDER_ACTIONS.UPDATE_ORDER_ERROR,
        payload: { error }
    }
}

export function deleteOrder(id: string): ActionResponse {
    return {
        type: ORDER_ACTIONS.DELETE_ORDER,
        payload: { id }
    }
}

export function deleteOrderSuccess(message: string): ActionResponse {
    return {
        type: ORDER_ACTIONS.DELETE_ORDER_SUCCESS,
        payload: { message }
    }
}

export function deleteOrderError(error: string): ActionResponse {
    return {
        type: ORDER_ACTIONS.DELETE_ORDER_ERROR,
        payload: { error }
    }
}