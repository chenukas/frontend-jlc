import { takeEvery, put, call, select } from 'redux-saga/effects';
import { CART_ACTIONS } from '../constants';
import { cartActions } from '../actions';
import { processRequest } from '../services/Api';
import { GET_CART, SAVE_CART, UPDATE_CART, DELETE_CART } from '../constants/api';
import { AnyAction } from 'redux';
import { cartBuilder, cartRemover } from '../helpers/cartHelper';


function* handleGetCart(action: AnyAction): any {
    try {
        const { id } = action.payload;
        const { data } = yield call(processRequest, GET_CART(id));
        if (data) {
            yield put(cartActions.getCartSuccess(data.data));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(cartActions.getCartError(error || e));
    }
}

function* handleSaveCart(action: AnyAction): any {
    try {
        const { cart } = action.payload;
        const requestPayload = cart;
        const { data } = yield call(processRequest, SAVE_CART, 'POST', requestPayload);
        if (data) {
            yield put(cartActions.saveCartSuccess(data.message));
            yield put(cartActions.getCartSuccess(data.data))
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(cartActions.saveCartError(error || e));
    }
}

function* handleUpdateCart(action: AnyAction): any {
    try {
        const { id, cart } = action.payload;
        const requestPayload = cart;
        const { data } = yield call(processRequest, UPDATE_CART(id), 'PUT', requestPayload);
        if (data) {
            yield put(cartActions.updateCartSuccess(data.message));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(cartActions.updateCartError(error || e));
    }
}

function* handleDeleteCart(action: AnyAction): any {
    try {
        const { id } = action.payload;
        const { data } = yield call(processRequest, DELETE_CART(id), 'DELETE', {});
        if (data) {
            yield put(cartActions.deleteCartSuccess(data.message));
        }
    } catch (e: any) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(cartActions.deleteCartError(error || e));
    }
}

function* handleAddProductToCart(action: AnyAction): any {
    try {
        const { product } = action.payload;
        const state = yield select()
        const { cartState: { products, qty, total } } = state;

        if (product._id != null) {
            const newCart = cartBuilder(product, products, qty, total)

            yield put(cartActions.updateLocalCart(newCart));
        }
    } catch (e: any) {
        console.log(e);
    }
}

function* handleRemoveProductFromCart(action: AnyAction): any {
    try {
        const { product } = action.payload;
        const state = yield select()
        const { cartState: { products, qty, total } } = state;

        if (product._id != null && products.length > 0) {
            const newCart = cartRemover(product, products, qty, total);

            yield put(cartActions.updateLocalCart(newCart));
        }
    } catch (e: any) {
        console.log(e);
    }
}

export function* watchCartSagas() {
    yield takeEvery(CART_ACTIONS.GET_CART, handleGetCart);
    yield takeEvery(CART_ACTIONS.SAVE_CART, handleSaveCart);
    yield takeEvery(CART_ACTIONS.UPDATE_CART, handleUpdateCart);
    yield takeEvery(CART_ACTIONS.DELETE_CART, handleDeleteCart);
    yield takeEvery(CART_ACTIONS.ADD_PRODUCT_TO_CART, handleAddProductToCart);
    yield takeEvery(CART_ACTIONS.REMOVE_PRODUCT_FROM_CART, handleRemoveProductFromCart);
}