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

 export const SET_TOKEN = (token)=>{
    return {
        type:AuthenType.SET_TOKEN,
        payload : token
    }
 }
