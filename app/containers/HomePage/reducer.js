import produce from 'immer';
import { handleActions, combineActions } from 'redux-actions';
import { getUsers, getUsersFail, getUsersSucceed } from './actions';

export const initialState = {
  users: [],
  loading: false,
};

export const key = 'home';

export const homeReducer = {
  key,
  reducer: handleActions(
    {
      [getUsersSucceed]: (state = initialState, { payload }) =>
        produce(state, draft => {
          draft.loading = false;
          draft.users = [...state.users, ...payload.users];
        }),
      [getUsers]: (state = initialState, action) =>
        produce(state, draft => {
          draft.loading = true;
        }),
    },
    initialState,
  ),
};

export default homeReducer;
