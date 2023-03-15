export default {
    AUTH_STATE: {
        user: localStorage.getItem('jlc_user') ? JSON.parse(localStorage.getItem('jlc_user')!) : {
            "_id": "640ed509bec0cf3cb79464e8",
            "firstName": "Customer",
            "lastName": "User",
            "username": "customeruser",
            "email": "customeruser@gmail.com",
            "isAdmin": false,
            "createdAt": "2023-03-13T07:47:21.677Z",
            "updatedAt": "2023-03-13T08:23:59.106Z",
            "__v": 0,
            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGVkNTA5YmVjMGNmM2NiNzk0NjRlOCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Nzg4NjM3NDgsImV4cCI6MTY3OTEyMjk0OH0.y6knjXT_VdiPL_-7GA_0zi0aLF4PtBfsnkS0CvQ2XZ0"
        },
        message: null,
        error: null
    },
    PRODUCT_STATE: {
        products: [{
            "_id": "6411496199ba0d44101534bd",
            "title": "Wooden Frame",
            "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.",
            "img": "https://firebasestorage.googleapis.com/v0/b/jean-s-lc.appspot.com/o/images%2F1678854477677628099_1000_1_-wooden-frame-22cm-x-16cm.webp?alt=media&token=0bf995c4-8fe7-42a5-9d8a-d6d45165f582",
            "categories": [
                "wooden",
                "frame"
            ],
            "price": 25,
            "inStock": true,
            "createdAt": "2023-03-15T04:28:17.771Z",
            "updatedAt": "2023-03-15T04:28:17.771Z",
            "__v": 0
        },
        {
            "_id": "64116136371dbcdbb2412f49",
            "title": "Fillable Egg of Eggs",
            "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.",
            "img": "https://firebasestorage.googleapis.com/v0/b/jean-s-lc.appspot.com/o/images%2F1678860553305661222_1000_1_-fillable-eggs-thirty-pack-easter.webp?alt=media&token=16f2bde2-7664-4c0e-aff6-f2e968deca37",
            "categories": [
                "easter",
                "eggs"
            ],
            "price": 250,
            "inStock": true,
            "createdAt": "2023-03-15T06:09:58.503Z",
            "updatedAt": "2023-03-15T06:09:58.503Z",
            "__v": 0
        }],
        product: {
            "_id": "641148c299ba0d44101534b7",
            "title": "Teddy Bear Money Box",
            "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.",
            "img": "https://firebasestorage.googleapis.com/v0/b/jean-s-lc.appspot.com/o/images%2F1678854296981642550_1000_1_-paint-your-own-teddy-bear-money-box.webp?alt=media&token=b52cafbc-1a95-4a4d-85de-25a0c4064d03",
            "categories": [
                "ceramic",
                "moneybox",
                "teddy"
            ],
            "price": 60,
            "inStock": true,
            "createdAt": "2023-03-15T04:25:38.795Z",
            "updatedAt": "2023-03-15T04:25:38.795Z",
            "__v": 0
        },
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

