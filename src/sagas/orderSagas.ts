import { takeEvery, put, call } from 'redux-saga/effects';
import { ORDER_ACTIONS } from '../constants';
import { orderActions } from '../actions';
import { processRequest } from '../services/Api';
import { GET_ALL_ORDERS, GET_ORDERS, CREATE_ORDER, UPDATE_ORDER, DELETE_ORDER } from '../constants/api';
import { AnyAction } from 'redux';

function* handleCreateOrder(action: AnyAction): any {
    try {
        const { order } = action.payload;
        const requestPayload = order;
        const { data } = yield call(processRequest, CREATE_ORDER, 'POST', requestPayload);
        if (data) {
            yield put(orderActions.createOrderSuccess(data.message));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(orderActions.createOrderError(error || e));
    }
}

function* handleGetAllOrders(action: AnyAction): any {
    try {
        const { data } = yield call(processRequest, GET_ALL_ORDERS, 'GET', {});
        if (data) {
            yield put(orderActions.getAllOrdersSuccess(data.data));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(orderActions.getAllOrdersError(error || e));
    }
}

function* handleGetOrders(action: AnyAction): any {
    try {
        const { id } = action.payload;
        const { data } = yield call(processRequest, GET_ORDERS(id), 'GET', {});
        if (data) {
            yield put(orderActions.getOrdersSuccess(data.data));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(orderActions.getOrdersSuccess(error || e));
    }
}

function* handleUpdateOrder(action: AnyAction): any {
    try {
        const { id, order } = action.payload;
        const requestPayload = order;
        const { data } = yield call(processRequest, UPDATE_ORDER(id), 'PUT', requestPayload);
        if (data) {
            yield put(orderActions.updateOrderSuccess(data.message));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(orderActions.updateOrderError(error || e));
    }
}

function* handleDeleteOrder(action: AnyAction): any {
    try {
        const { id } = action.payload;
        const { data } = yield call(processRequest, DELETE_ORDER(id), 'DELETE');
        if (data) {
            yield put(orderActions.deleteOrderSuccess(data.message));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(orderActions.deleteOrderError(error || e));
    }
}

export function* watchOrderSagas() {
    yield takeEvery(ORDER_ACTIONS.CREATE_ORDER, handleCreateOrder);
    yield takeEvery(ORDER_ACTIONS.GET_ALL_ORDERS, handleGetAllOrders);
    yield takeEvery(ORDER_ACTIONS.GET_ORDERS, handleGetOrders);
    yield takeEvery(ORDER_ACTIONS.UPDATE_ORDER, handleUpdateOrder);
    yield takeEvery(ORDER_ACTIONS.DELETE_ORDER, handleDeleteOrder);
}