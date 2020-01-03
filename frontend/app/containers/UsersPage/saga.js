import { takeLatest, call, put} from 'redux-saga/effects';
import {getUsers, getUsersSucceed, getUsersFail} from './actions';

import { apiGetUsers } from './api';

export function* getUsersSaga() {
  try {
    const users = yield call(apiGetUsers);
    yield put(getUsersSucceed({ users }));
  } catch (e) {
    yield put(getUsersFail({ message: e.message }));
  }
}

export function* handleGetUsers() {
  yield takeLatest(getUsers, getUsersSaga);
}

export default {
  key: 'users',
  saga: handleGetUsers,
};
