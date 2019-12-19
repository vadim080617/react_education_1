import { createAction } from 'redux-actions';

export const getUsers = createAction('GET_USERS_REQUESTED');
export const getUsersSucceed = createAction('GET_USERS_SUCCEEDED');
export const getUsersFail = createAction('GET_USERS_FAILED');
