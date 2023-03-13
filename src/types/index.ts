export interface Product {
    _id?: string,
    title: string,
    desc: string,
    img: string,
    categories: Array<string>,
    price: number,
    inStock: boolean,
    quantity?: number 
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

export interface Cart {
    _id?: string,
    userId?: string,
    products: Array<Product>,
    qty: number,
    total: number
}

export interface Order {
    _id?: string,
    userId?: string,
    products: Array<Product>,
    amount: number,
    address: string,
    status?: string
}

export type ActionResponse = {
    type: string,
    payload: any
}