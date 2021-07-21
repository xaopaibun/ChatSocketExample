
import { HomeType } from '../../constants/index';

const initialState = {
    isloading: true
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {

        case HomeType.DataProduct:
          
            return { ...state, Product: action.payload.data };

        case HomeType.DataProductError:
            console.log('Error: ', action.payload)
            return state;

        case HomeType.TEST_SEND_REQUEST:
            console.log('test product call api')
            return state;

        case HomeType.SHOW_LOADING_ACTION:
            return { ...state, isloading: true }

        case HomeType.HIDE_LOADING_ACTION:
            return { ...state, isloading: false }
            

        default:
            return state;
    }
}