import { HomeType } from "../../constants"

export const set_Product = (product) => {
    return {
        type: HomeType.DataProduct,
        payload :product
    }
}

export const set_ProductError = (e) => {
    return {
        type: HomeType.DataProductError,
        payload :e
    }
}

export const TEST_SEND_REQUEST = () => {
    return {
        type: HomeType.TEST_SEND_REQUEST
    }
}

export const SHOW_LOADING_ACTION = () => {
    return {
        type: HomeType.SHOW_LOADING_ACTION
    }
}

export const HIDE_LOADING_ACTION = () => {
    return {
        type: HomeType.HIDE_LOADING_ACTION
    }
}