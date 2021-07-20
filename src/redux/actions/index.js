import { AuthenType, HomeType } from "../../constants"




export const set_Product = (product) => {
    return {
        type: HomeType.DataProduct,
        payload :product
    }
}



export const LOGIN_REQUEST_ADMIN = (admin) => {
    return {
        type: AuthenType.LOGIN_REQUEST,
        payload :admin
    }
}


export const set_ProductError = (e) => {
    return {
        type: HomeType.DataProductError,
        payload :e
    }
}


export const LOGIN_ADMIN = () => {
    return {
        type: AuthenType.LOGIN_ADMIN
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
 export const SET_TOKEN = (token)=>{
    return {
        type:AuthenType.SET_TOKEN,
        payload : token
    }
 }



// export const test_api_product = () => (dispatch) => {
//     Promise.all([getloai(), getdata()]).then((values) => {
//         dispatch(set_Product(values[0]))
//         dispatch(set_ProductType(values[1]))
//     });
// }