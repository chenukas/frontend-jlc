import PRODUCT_ACTIONS from './actions/productActions';
import CART_ACTIONS from './actions/cartActions';
import ORDER_ACTIONS from './actions/orderActions';
import PAYMENT_ACTIONS from './actions/paymentActions';
import AUTH_ACTIONS from './actions/authActions';
import INITIAL_STATE from './InitialState';
import LOCAL_STORAGE from './LocalStorage';

export const BASE_API_URL = 'http://localhost:5000/api'

export {
    PRODUCT_ACTIONS,
    CART_ACTIONS,
    ORDER_ACTIONS,
    PAYMENT_ACTIONS,
    AUTH_ACTIONS,
    INITIAL_STATE,
    LOCAL_STORAGE
}