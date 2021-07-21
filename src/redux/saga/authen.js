 import { call, put, takeEvery, all, takeLatest, fork, take } from 'redux-saga/effects'
import { AuthenType } from '../../constants';
import { loginAdmin } from '../../services/api';

import {  SET_TOKEN } from '../actions/authenAction';



const SetToken = (accessToken) => {
    localStorage.setItem('accessToken', accessToken)
}

export function* apiSideEffectLoginAdmin() {
    const admin = yield take(AuthenType.LOGIN_REQUEST)
    try {
        const result = yield call(loginAdmin, admin.payload)
        console.log(result.data.accessToken)
        yield call(SetToken, result.data.accessToken)
        yield put(SET_TOKEN(result.data.accessToken))
         //yield put(TEST_SEND_REQUEST())
    } catch (e) {
        console.log('call api error', e)
    }
}

export function* apiLoginAdminSaga() {
    yield takeLatest(AuthenType.LOGIN_ADMIN, apiSideEffectLoginAdmin);
}
