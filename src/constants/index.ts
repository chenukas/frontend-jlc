import PRODUCT_ACTIONS from './actions/productActions';
import CART_ACTIONS from './actions/cartActions';
import ORDER_ACTIONS from './actions/orderActions';
import PAYMENT_ACTIONS from './actions/paymentActions';
import AUTH_ACTIONS from './actions/authActions';
import STATISTIC_ACTIONS from './actions/statisticActions';
import INITIAL_STATE from './InitialState';
import LOCAL_STORAGE from './LocalStorage';
import USER_ACTIONS from './actions/userActions';

export const BASE_API_URL = 'https://jeans-lab-collection.onrender.com/api'

export {
    PRODUCT_ACTIONS,
    CART_ACTIONS,
    ORDER_ACTIONS,
    PAYMENT_ACTIONS,
    USER_ACTIONS,
    AUTH_ACTIONS,
    STATISTIC_ACTIONS,
    INITIAL_STATE,
    LOCAL_STORAGE
}