export const GET_ALL_PRODUCTS = '/products';
export const GET_PRODUCT = (id: string = '') => `/products/find/${id}`;
export const CREATE_PRODUCT = '/products';
export const UPDATE_PRODUCT = (id: string = '') => `/products/${id}`;
export const DELETE_PRODUCT = (id: string = '') => `/products/${id}`;