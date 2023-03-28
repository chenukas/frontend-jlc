export default {
    AUTH_STATE: {
        user: localStorage.getItem('jlc_user') && JSON.parse(localStorage.getItem('jlc_user')!),
        message: null,
        error: null
    },
    PRODUCT_STATE: {
        products: [],
        product: null,
        message: null,
        error: null
    },
    CART_STATE: {
        id: null,
        userId: null,
        products: [],
        qty: 0,
        total: 0,
        message: null,
        error: null
    },
    ORDER_STATE: {
        orders: [],
        message: null,
        error: null
    },
    PAYMENT_STATE: {
        payments: [],
        message: null,
        error: null
    },
    USER_STATE: {
        user: null,
        users: [],
        message: null,
        error: null
    },
    STATISTIC_STATE: {
        userStats: [],
        orderStats: [],
        message: null,
        error: null
    }
}

