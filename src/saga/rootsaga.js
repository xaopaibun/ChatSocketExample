import { apiLoginAdminSaga } from "./authen";
import { all} from 'redux-saga/effects'
import { apiProductSaga } from "./product";
export default function* rootSaga() {
    yield all([
        apiLoginAdminSaga(),
        apiProductSaga()
    ]);

}
