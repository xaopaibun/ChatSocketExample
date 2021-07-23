import { AuthenType } from "../../constants"







export const LOGIN_REQUEST_ADMIN = (admin) => {
    return {
        type: AuthenType.LOGIN_REQUEST,
        payload :admin
    }
}



export const LOGIN_ADMIN = () => {
    return {
        type: AuthenType.LOGIN_ADMIN
    }
}


export const LOGIN_ERROR = (e) => {
    return {
        type: AuthenType.LOGIN_ERROR,
        payload : e
    }
}


export const LOGIN_SUCCSESS = () => {
    return {
        type: AuthenType.LOGIN_SUCCSESS
    }
}

 export const SET_TOKEN = (token)=>{
    return {
        type:AuthenType.SET_TOKEN,
        payload : token
    }
 }
