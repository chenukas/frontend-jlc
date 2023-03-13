import { CART_ACTIONS } from "../constants";
import { ActionResponse, Cart, Product } from "../types";


export function getCart(id: string): ActionResponse {
    return {
        type: CART_ACTIONS.GET_CART,
        payload: { id }
    }
}

export function getCartSuccess(cart: Cart): ActionResponse {
    return {
        type: CART_ACTIONS.GET_CART_SUCCESS,
        payload: { cart }
    }
}

export function getCartError(error: string): ActionResponse {
    return {
        type: CART_ACTIONS.GET_CART_ERROR,
        payload: { error }
    }
}

export function saveCart(cart: Cart): ActionResponse {
    return {
        type: CART_ACTIONS.SAVE_CART,
        payload: { cart }
    }
}

export function saveCartSuccess(message: string): ActionResponse {
    return {
        type: CART_ACTIONS.SAVE_CART_SUCCESS,
        payload: { message }
    }
}

export function saveCartError(error: string): ActionResponse {
    return {
        type: CART_ACTIONS.SAVE_CART_ERROR,
        payload: { error }
    }
}

export function updateCart(id: string, cart: Cart): ActionResponse {
    return {
        type: CART_ACTIONS.UPDATE_CART,
        payload: { id, cart }
    }
}

export function updateCartSuccess(message: string): ActionResponse {
    return {
        type: CART_ACTIONS.UPDATE_CART_SUCCESS,
        payload: { message }
    }
}

export function updateCartError(error: string): ActionResponse {
    return {
        type: CART_ACTIONS.UPDATE_CART_ERROR,
        payload: { error }
    }
}

export function deleteCart(id: string): ActionResponse {
    return {
        type: CART_ACTIONS.DELETE_CART,
        payload: { id }
    }
}

export function deleteCartSuccess(message: string): ActionResponse {
    return {
        type: CART_ACTIONS.DELETE_CART_SUCCESS,
        payload: { message }
    }
}

export function deleteCartError(error: string): ActionResponse {
    return {
        type: CART_ACTIONS.DELETE_CART_ERROR,
        payload: { error }
    }
}

export function addProductToCart(product: Product): ActionResponse {
    return {
        type: CART_ACTIONS.ADD_PRODUCT_TO_CART,
        payload: { product }
    }
}

export function removeProductFromCart(product: Product): ActionResponse {
    return {
        type: CART_ACTIONS.REMOVE_PRODUCT_FROM_CART,
        payload: { product }
    }
}

export function updateLocalCart(cart: Cart): ActionResponse {
    return {
        type: CART_ACTIONS.UPDATE_LOCAL_CART,
        payload: { cart }
    }
}