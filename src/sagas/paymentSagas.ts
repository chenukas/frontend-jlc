import { takeEvery, put, call } from 'redux-saga/effects';
import { LOCAL_STORAGE, PAYMENT_ACTIONS } from '../constants';
import { paymentActions } from '../actions';
import { processRequest } from '../services/Api';
import { GET_ALL_PAYMENTS, PROCESS_PAYMENT } from '../constants/api';
import { AnyAction } from 'redux';

const header = { 
    'Accept': 'application/json', 
    'Authorization' : `Bearer ${localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)}` 
}

function* handleCreatePayment(action: AnyAction): any {
    try {
        const { payment } = action.payload;
        const requestPayload = payment;
        const { data } = yield call(processRequest, PROCESS_PAYMENT, 'POST', requestPayload, header);
        if (data) {
            yield put(paymentActions.createPaymentSuccess(data.message));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(paymentActions.createPaymentError(error || e));
    }
}

function* handleGetAllPayments(action: AnyAction): any {
    try {
        const { data } = yield call(processRequest, GET_ALL_PAYMENTS, 'GET', {}, header);
        if (data) {
            yield put(paymentActions.getAllPaymentsSuccess(data.data));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(paymentActions.getAllPaymentsError(error || e));
    }
}

export function* watchPaymentSagas() {
    yield takeEvery(PAYMENT_ACTIONS.PROCESS_PAYMENT, handleCreatePayment);
    yield takeEvery(PAYMENT_ACTIONS.GET_ALL_PAYMENTS, handleGetAllPayments);
}