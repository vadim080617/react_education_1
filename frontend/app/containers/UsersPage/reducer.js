import produce from 'immer';
import { handleActions } from 'redux-actions';
import { getUsers, getUsersFail, getUsersSucceed } from './actions';

export const initialState = {
  users: [{id: -1, name: 'DEBUG'}],
  loading: false
};

export const usersReducerKey = 'users';

export const usersReducer = handleActions({
    [getUsers]: (state = initialState) =>
      produce(state, draft => {
        draft.loading = true
      })
    ,
    [getUsersFail]: (state = initialState, action) => {
      console.log(action);

      return produce(state, draft => {
        draft.loading = false;
      });
    }
    ,
    [getUsersSucceed]: (state = initialState, {payload: { users }}) => {
      console.log(users);

      return produce(state, draft => {
        draft.users = users;
        console.log('>>>', draft.users);
        draft.loading = false;
      });
    }
  },
  initialState
);

export const usersReducerObj = {
  key: usersReducerKey,
  reducer: usersReducer
};

export default usersReducer;
