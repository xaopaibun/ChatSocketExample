import { combineReducers } from "redux";
import AuthenReducer from "./authenReducer";
import productReducer from './productReducers';
const rootReducer = combineReducers({
    AuthenReducer,
    productReducer
  });
export default rootReducer;
  