import { AuthenType } from "../../constants";

const initialState = {
    token: "",
    err: "",
    image : "http://simpleicon.com/wp-content/uploads/user1.png",
};

export default function AuthenReducer(state = initialState, action) {
    switch (action.type) {

        case AuthenType.LOGIN_REQUEST:
            console.log('da an nut login')
            return state;

        case AuthenType.LOGIN_ADMIN:
            return state;

        case AuthenType.LOGIN_ERROR:

            return { ...state, errorlogin: action.payload };

        case AuthenType.LOGIN_SUCCSESS:
            return state;

        case AuthenType.SET_TOKEN:
            return { ...state, token: action.payload }

        case AuthenType.LOGIN_FACEBOOK:
            return { ...state, name :  action.payload.name, image: action.payload.image }
        
        case AuthenType.LOGIN_LOCAL:
                return { ...state, name : action.payload}

        default:
            return state;
    }
}