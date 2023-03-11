import { takeEvery, put, call, select } from 'redux-saga/effects';
import { AUTH_ACTIONS, LOCAL_STORAGE } from '../constants';
import { authActions } from '../actions';
import { processRequest } from '../services/Api';
import { LOGIN, REGISTER } from '../constants/api';
import { AnyAction } from 'redux';

function* handleRegister(action: AnyAction): any {
    try {
        const { user } = action.payload;
        const requestPayload = user;
        const { data } = yield call(processRequest, REGISTER, 'POST', requestPayload);
        if (data) {
            yield put(authActions.registerSuccess(data.message));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(authActions.registerError(error || e));
    }
}

function* handleLogin(action: AnyAction): any {
    try {
        const { username, password } = action.payload;
        const requestPayload = {
            username,
            password
        };
        const { data } = yield call(processRequest, LOGIN, 'POST', requestPayload);
        if (data) {
            const { _id, accessToken, ...others } = data.data;
            yield put(authActions.loginSuccess(others, data.message));
            localStorage.setItem(LOCAL_STORAGE.USER, JSON.stringify(others));
            localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, accessToken)
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(authActions.loginError(error || e));
    }
}

function* handleLogout(action: AnyAction) {
    try {
        yield put(authActions.logoutSuccess());
        localStorage.removeItem(LOCAL_STORAGE.USER);
    } catch (e) {
        console.log(e);
    }
}

export function* watchPaymentSagas() {
    yield takeEvery(AUTH_ACTIONS.LOGIN, handleLogin);
    yield takeEvery(AUTH_ACTIONS.REGISTER, handleRegister);
    yield takeEvery(AUTH_ACTIONS.LOGOUT, handleLogout);
}