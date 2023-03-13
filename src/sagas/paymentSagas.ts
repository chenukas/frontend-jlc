import { takeEvery, put, call, select } from 'redux-saga/effects';
import { PAYMENT_ACTIONS } from '../constants';
import { orderActions, paymentActions } from '../actions';
import { processRequest } from '../services/Api';
import { GET_ALL_PAYMENTS, PROCESS_PAYMENT } from '../constants/api';
import { AnyAction } from 'redux';

function* handleCreatePayment(action: AnyAction): any {
    try {
        const { payment } = action.payload;
        const requestPayload = payment;
        const { data } = yield call(processRequest, PROCESS_PAYMENT, 'POST', requestPayload);
        console.log(data.data)
        if (data) {
            yield put(paymentActions.createPaymentSuccess(data.message));
            const state = yield select()
            const { cartState: { products, qty, total }, authState: { user } } = state;
            const payment = data.data
            const { address_line1, address_city, address_country, address_zip } = payment.source;
            console.log(user)
            yield put(orderActions.createOrder({
                userId: user._id,
                products: products,
                amount: total,
                address: `${address_line1}, ${address_city}, ${address_country} ${address_zip}`
            }))
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
        const { data } = yield call(processRequest, GET_ALL_PAYMENTS, 'GET', {});
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