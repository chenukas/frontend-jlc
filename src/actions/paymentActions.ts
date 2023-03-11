import { PAYMENT_ACTIONS } from "../constants";
import { ActionResponse } from "../types";


export function getAllPayments(): ActionResponse {
    return {
        type: PAYMENT_ACTIONS.GET_ALL_PAYMENTS,
        payload: {}
    }
}

export function getAllPaymentsSuccess(payments: Array<any>): ActionResponse {
    return {
        type: PAYMENT_ACTIONS.GET_ALL_PAYMENTS_SUCCESS,
        payload: { payments }
    }
}

export function getAllPaymentsError(error: string): ActionResponse {
    return {
        type: PAYMENT_ACTIONS.GET_ALL_PAYMENTS_ERROR,
        payload: { error }
    }
}

export function createPayment(payment: any): ActionResponse {
    return {
        type: PAYMENT_ACTIONS.PROCESS_PAYMENT,
        payload: { payment }
    }
}

export function createPaymentSuccess(message: string): ActionResponse {
    return {
        type: PAYMENT_ACTIONS.PROCESS_PAYMENT_SUCCESS,
        payload: { message }
    }
}

export function createPaymentError(error: string): ActionResponse {
    return {
        type: PAYMENT_ACTIONS.PROCESS_PAYMENT_ERROR,
        payload: { error }
    }
}