import { createSelector } from 'reselect';
import { initialState, key } from './reducer';

const usersSelector = state =>
  state[key] ? state[key].users : initialState.users;
const loadingSelector = state =>
  state[key] ? state[key].loading : initialState.loading;
const latestUserId = createSelector(
  usersSelector,
  users => (users.length ? users[users.length - 1].id : 0),
);

export { usersSelector, latestUserId, loadingSelector };
