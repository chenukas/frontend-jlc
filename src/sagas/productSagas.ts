import { takeEvery, put, call, select } from 'redux-saga/effects';
import { LOCAL_STORAGE, PRODUCT_ACTIONS } from '../constants';
import { productActions } from '../actions';
import { processRequest } from '../services/Api';
import { GET_ALL_PRODUCTS, GET_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../constants/api';
import { AnyAction } from 'redux';

const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER)!)

const header = { 
    'Accept': 'application/json', 
    'Authorization' : `Bearer ${user && user.accessToken}` 
}

function* handleGetAllProducts(action: AnyAction): any {
    try {
        const { data } = yield call(processRequest, GET_ALL_PRODUCTS);
        if (data) {
            yield put(productActions.getAllProductsSuccess(data.data));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(productActions.getAllProductsError(error || e));
    }
}

function* handleGetProduct(action: AnyAction): any {
    try {
        const { id } = action.payload;
        const { data } = yield call(processRequest, GET_PRODUCT(id));
        if (data) {
            yield put(productActions.getProductSuccess(data.data));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(productActions.getProductError(error || e));
    }
}

function* handleCreateProduct(action: AnyAction): any {
    try {
        const { product } = action.payload;
        const requestPayload = product;
        const { data } = yield call(processRequest, CREATE_PRODUCT, 'POST', requestPayload, header);
        if (data) {
            yield put(productActions.createProductSuccess(data.message));
            yield put(productActions.getAllProducts());
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(productActions.createProductError(error || e));
    }
}

function* handleUpdateProduct(action: AnyAction): any {
    try {
        const { id, product } = action.payload;
        const requestPayload = product;
        const { data } = yield call(processRequest, UPDATE_PRODUCT(id), 'PUT', requestPayload, header);
        if (data) {
            yield put(productActions.updateProductSuccess(data.message));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(productActions.updateProductError(error || e));
    }
}

function* handleDeleteProduct(action: AnyAction): any {
    try {
        const { id } = action.payload;
        const { data } = yield call(processRequest, DELETE_PRODUCT(id), 'DELETE', {}, header);
        if (data) {
            yield put(productActions.deleteProductSuccess(data.message));
            yield put(productActions.getAllProducts());
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(productActions.deleteProductError(error || e));
    }
}

export function* watchProductSagas() {
    yield takeEvery(PRODUCT_ACTIONS.GET_ALL_PRODUCTS, handleGetAllProducts);
    yield takeEvery(PRODUCT_ACTIONS.GET_PRODUCT, handleGetProduct);
    yield takeEvery(PRODUCT_ACTIONS.CREATE_PRODUCT, handleCreateProduct);
    yield takeEvery(PRODUCT_ACTIONS.UPDATE_PRODUCT, handleUpdateProduct);
    yield takeEvery(PRODUCT_ACTIONS.DELETE_PRODUCT, handleDeleteProduct);
}