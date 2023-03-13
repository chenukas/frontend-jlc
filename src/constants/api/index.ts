export const GET_ALL_PRODUCTS = '/products';
export const GET_PRODUCT = (id: string = '') => `/products/find/${id}`;
export const CREATE_PRODUCT = '/products';
export const UPDATE_PRODUCT = (id: string = '') => `/products/${id}`;
export const DELETE_PRODUCT = (id: string = '') => `/products/${id}`;
export const GET_ALL_PAYMENTS = '/payments';
export const PROCESS_PAYMENT = '/payments/checkout';
export const LOGIN = '/auth/login';
export const REGISTER = '/auth/register';