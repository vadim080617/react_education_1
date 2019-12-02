/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserList from '../../components/UserList';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { usersSelector, latestUserId, loadingSelector } from './selectors';
import { getUsers } from './actions';
import saga from './saga';
import reducer from './reducer';

export function HomePage() {
  useInjectReducer(reducer);
  useInjectSaga(saga);

  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const from = useSelector(latestUserId);
  const usersLoading = useSelector(state => loadingSelector(state));
  const handleGetUsers = useCallback(() => dispatch(getUsers({ from })), [
    from,
  ]);

  return (
    <UserList
      loading={usersLoading}
      users={users}
      onGetUsers={handleGetUsers}
    />
  );
}

export default HomePage;
