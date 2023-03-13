import { PRODUCT_ACTIONS } from "../constants";
import { Product, ActionResponse } from "../types";


export function getAllProducts(): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.GET_ALL_PRODUCTS,
        payload: {}
    }
}

export function getAllProductsSuccess(products: Array<Product>): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.GET_ALL_PRODUCTS_SUCCESS,
        payload: { products }
    }
}

export function getAllProductsError(error: string): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.GET_ALL_PRODUCTS_ERROR,
        payload: { error }
    }
}

export function getProduct(id: string): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.GET_PRODUCT,
        payload: { id }
    }
}

export function getProductSuccess(product: Product): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.GET_PRODUCT_SUCCESS,
        payload: { product }
    }
}

export function getProductError(error: string): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.GET_PRODUCT_ERROR,
        payload: { error }
    }
}

export function clearProduct(): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.CLEAR_PRODUCT,
        payload: {}
    }
}

export function createProduct(product: Product): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.CREATE_PRODUCT,
        payload: { product }
    }
}

export function createProductSuccess(message: string): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.CREATE_PRODUCT_SUCCESS,
        payload: { message }
    }
}

export function createProductError(error: string): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.CREATE_PRODUCT_ERROR,
        payload: { error }
    }
}

export function updateProduct(id: string, product: Product): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.UPDATE_PRODUCT,
        payload: { id, product }
    }
}

export function updateProductSuccess(message: string): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.UPDATE_PRODUCT_SUCCESS,
        payload: { message }
    }
}

export function updateProductError(error: string): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.UPDATE_PRODUCT_ERROR,
        payload: { error }
    }
}

export function deleteProduct(id: string): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.DELETE_PRODUCT,
        payload: { id }
    }
}

export function deleteProductSuccess(message: string): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.DELETE_PRODUCT_SUCCESS,
        payload: { message }
    }
}

export function deleteProductError(error: string): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.DELETE_PRODUCT_ERROR,
        payload: { error }
    }
}

export function clearState(): ActionResponse {
    return {
        type: PRODUCT_ACTIONS.CLEAR_STATE,
        payload: {}
    }
}
