export const emailValidation = (email: string = ''): boolean => {
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        return true
    }
    return false
}

export const lengthValidation = (str: string, minLength: number, maxLength: number): boolean => {
    if (str.length >= minLength && str.length <= maxLength && str.match(/^[a-zA-Z0-9]+$/)) {
        return true
    }
    return false
}