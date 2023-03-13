import { takeEvery, put, call } from 'redux-saga/effects';
import { USER_ACTIONS } from '../constants';
import { userActions } from '../actions';
import { processRequest } from '../services/Api';
import { GET_ALL_USERS, GET_USER, UPDATE_USER, DELETE_USER } from '../constants/api';
import { AnyAction } from 'redux';

function* handleGetUser(action: AnyAction): any {
    try {
        const { id } = action.payload;
        const { data } = yield call(processRequest, GET_USER(id));
        if (data) {
            yield put(userActions.getUserSuccess(data.data));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(userActions.getUserError(error || e));
    }
}

function* handleGetAllUsers(action: AnyAction): any {
    try {
        const { data } = yield call(processRequest, GET_ALL_USERS);
        if (data) {
            yield put(userActions.getAllUsersSuccess(data.data));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(userActions.getAllUsersError(error || e));
    }
}

function* handleUpdateUser(action: AnyAction): any {
    try {
        const { id, user } = action.payload;
        const requestPayload = user;
        const { data } = yield call(processRequest, UPDATE_USER(id), 'PUT', requestPayload);
        if (data) {
            yield put(userActions.updateUserSuccess(data.message));
            yield put(userActions.getUserSuccess(data.data))
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(userActions.updateUserError(error || e));
    }
}

function* handleDeleteUser(action: AnyAction): any {
    try {
        const { id } = action.payload;
        const { data } = yield call(processRequest, DELETE_USER(id), 'DELETE');
        if (data) {
            yield put(userActions.deleteUserSuccess(data.message));
            yield put(userActions.getAllUsers());
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(userActions.deleteUserError(error || e));
    }
}

export function* watchUserSagas() {
    yield takeEvery(USER_ACTIONS.GET_USER, handleGetUser);
    yield takeEvery(USER_ACTIONS.GET_ALL_USERS, handleGetAllUsers);
    yield takeEvery(USER_ACTIONS.UPDATE_USER, handleUpdateUser);
    yield takeEvery(USER_ACTIONS.DELETE_USER, handleDeleteUser);
}