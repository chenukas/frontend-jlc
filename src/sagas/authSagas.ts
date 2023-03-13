import { takeEvery, put, call } from 'redux-saga/effects';
import { AUTH_ACTIONS, LOCAL_STORAGE } from '../constants';
import { authActions, cartActions } from '../actions';
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
            const { accessToken, ...others } = data.data;
            yield put(authActions.loginSuccess(others, data.message));
            localStorage.setItem(LOCAL_STORAGE.USER, JSON.stringify(others));
            localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, accessToken)
            yield put(cartActions.getCart(others._id));
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
        localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);
    } catch (e) {
        console.log(e);
    }
}

export function* watchAuthSagas() {
    yield takeEvery(AUTH_ACTIONS.LOGIN, handleLogin);
    yield takeEvery(AUTH_ACTIONS.REGISTER, handleRegister);
    yield takeEvery(AUTH_ACTIONS.LOGOUT, handleLogout);
}