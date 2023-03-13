export default {
    AUTH_STATE: {
        user: localStorage.getItem('jlc_user') ? JSON.parse(localStorage.getItem('jlc_user')!) : null,
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
        /* products: [{
            product:
            {
                _id: "6407298e399654dc01205dbd",
                title: "Product12",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry's", "img": "https://images.pexels.com/photos/6611188/pexels-photo-6611188.jpeg",
                categories: ["ceramic", "cup"],
                price: 3000,
                inStock: true,
                createdAt: "2023-03-07T12:09:50.672Z",
                updatedAt: "2023-03-07T12:09:50.672Z",
                __v: 0
            },
            quantity: 1
        },
        {
            product:
            {
                _id: "6407298e399654dc01205dcd",
                title: "Product12",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry's", "img": "https://images.pexels.com/photos/6611188/pexels-photo-6611188.jpeg",
                categories: ["ceramic", "cup"],
                price: 3000,
                inStock: true,
                createdAt: "2023-03-07T12:09:50.672Z",
                updatedAt: "2023-03-07T12:09:50.672Z",
                __v: 0
            },
            quantity: 1
        }], */
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
        users: [],
        message: null,
        error: null
    }
}

