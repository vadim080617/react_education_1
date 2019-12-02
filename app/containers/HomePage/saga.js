import { takeLatest, call, put } from 'redux-saga/effects';
import { getUsers, getUsersSucceed, getUsersFail } from './actions';

import { apiGetUsers } from './api';

export function* getUsersSaga(action) {
  try {
    const users = yield call(apiGetUsers, action.payload.from);
    yield put(getUsersSucceed({ users }));
  } catch (e) {
    yield put(getUsersFail({ message: e.message }));
  }
}

export function* handleGetUser() {
  yield takeLatest(getUsers, getUsersSaga);
}

export default {
  key: 'home',
  saga: handleGetUser,
};
