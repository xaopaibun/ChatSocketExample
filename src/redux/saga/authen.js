 import { call, put, takeEvery, all, takeLatest, fork, take } from 'redux-saga/effects'
import { AuthenType } from '../../constants';
import { loginAdmin } from '../../services/api';
import { SET_TOKEN, LOGIN_ERROR, LOGIN_SUCCSESS } from 'redux/actions/authenAction';
import { SetToken } from 'utils/until';


export function* apiSideEffectLoginAdmin() {
    const admin = yield take(AuthenType.LOGIN_REQUEST)
    try {
        const result = yield call(loginAdmin, admin.payload)
        yield put(LOGIN_SUCCSESS())
        yield put(SET_TOKEN(result.data.accessToken))
        yield call(SetToken, result.data.accessToken)
    } catch (e) {
        yield put(LOGIN_ERROR(e))
    }
}

export function* apiLoginAdminSaga() {
    yield takeLatest(AuthenType.LOGIN_ADMIN, apiSideEffectLoginAdmin);
}
