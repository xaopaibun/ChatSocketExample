import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import rootReducer from '../reducers/index';
import rootSaga from '../saga/rootsaga';
export const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));



export default store;