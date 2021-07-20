import { call, put, takeEvery, all, takeLatest, fork, take } from 'redux-saga/effects'
import { AuthenType, HomeType } from '../constants';
import { getdata } from '../services/api';
import { set_Product, set_ProductError, SHOW_LOADING_ACTION, HIDE_LOADING_ACTION } from '../redux/actions/index';

export function* apiSideEffectTestProduct(action) {
    try {
        yield put(SHOW_LOADING_ACTION())
        const data = yield call(getdata);
        yield put(set_Product(data));
        yield put(HIDE_LOADING_ACTION());
    } catch (e) {
        yield put(set_ProductError(e));
    }
}

export function* apiProductSaga() {
    yield takeLatest(HomeType.TEST_SEND_REQUEST, apiSideEffectTestProduct);
}