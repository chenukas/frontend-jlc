export interface Product {
    _id?: string,
    title: string,
    desc: string,
    img: string,
    categories: Array<string>,
    price: number,
    inStock: boolean
}

export interface User {
    _id?: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    isAdmin?: boolean,
    accessToken?: string
}

export type ActionResponse = {
    type: string,
    payload: any
}