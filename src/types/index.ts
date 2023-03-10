export interface Product {
    _id?: string,
    title: string,
    desc: string,
    img: string,
    categories: Array<string>,
    price: number,
    inStock: boolean
}

export type ActionResponse = {
    type: string,
    payload: any
}