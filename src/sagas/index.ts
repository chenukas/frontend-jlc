import * as productSagas from './productSagas';
import * as Effects from 'redux-saga/effects';
const fork: any = Effects.fork;

export default function* rootSaga(store: any) {
    yield fork(productSagas.watchProductSagas, store);
}