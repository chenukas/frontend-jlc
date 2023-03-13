export const isHasMatch = (array: any, id: any) => {
    let hasMatch = false;
    for (let i of array) {
        if (i._id === id) {
            hasMatch = true;
        }
    }
    return hasMatch;
}


export const cartBuilder = (product: any, productsArr: any, qt: number, tot: number) => {
    const isMatch = isHasMatch(productsArr, product._id);
    let products = [];

    if (isMatch) {
        products = productsArr.map((e: any) => {
            if (e._id == product._id) {
                e.quantity += 1
            }
            return e
        })
    } else {
        productsArr.push(product);
        products = productsArr
    }

    const qty = qt + 1;
    const total = tot + product.price

    return { products, qty, total }
}

export const cartRemover = (product: any, productsArr: any, qt: number, tot: number) => {
    const isMatch = isHasMatch(productsArr, product._id);
    let products = [];

    if (isMatch) {
        products = productsArr.map((e: any) => {
                if (e._id == product._id) {
                    e.quantity -= 1
                }
                return e;
        })

        products = products.filter((e: any) => e.quantity > 0)
    } else {
        products = productsArr.filter((e: any) => {
            if(e._id != product._id) {
                return e;
            }
        })
    }

    const qty = qt - 1;
    const total = tot - product.price

    return { products, qty, total }
}