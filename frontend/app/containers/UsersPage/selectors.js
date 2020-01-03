import { initialState, usersReducerKey } from './reducer';

const usersSelector = state =>
  state[usersReducerKey] ? state[usersReducerKey].users : initialState.users;
const loadingSelector = state =>
  state[usersReducerKey] ? state[usersReducerKey].loading : initialState.loading;

export { usersSelector, loadingSelector };
