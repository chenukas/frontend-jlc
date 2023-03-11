import * as productSagas from './productSagas';
import * as paymentSagas from './paymentSagas';
import * as authSagas from './authSagas';
import * as Effects from 'redux-saga/effects';
const fork: any = Effects.fork;

export default function* rootSaga(store: any) {
    yield fork(productSagas.watchProductSagas, store);
    yield fork(paymentSagas.watchPaymentSagas, store);
    yield fork(authSagas.watchPaymentSagas, store);
}