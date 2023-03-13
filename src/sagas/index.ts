import * as productSagas from './productSagas';
import * as paymentSagas from './paymentSagas';
import * as authSagas from './authSagas';
import * as cartSagas from './cartSagas';
import * as orderSagas from './orderSagas';
import * as userSagas from './userSagas';
import * as statisticSagas from './statisticSagas';
import * as Effects from 'redux-saga/effects';
const fork: any = Effects.fork;

export default function* rootSaga(store: any) {
    yield fork(productSagas.watchProductSagas, store);
    yield fork(paymentSagas.watchPaymentSagas, store);
    yield fork(authSagas.watchAuthSagas, store);
    yield fork(cartSagas.watchCartSagas, store);
    yield fork(orderSagas.watchOrderSagas, store);
    yield fork(userSagas.watchUserSagas, store);
    yield fork(statisticSagas.watchStatisticSagas, store);
}