import React, { useEffect, useCallback } from 'react';
import { useInjectSaga } from '../../utils/injectSaga';
import saga from './saga';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './actions';
import { usersSelector, loadingSelector } from './selectors';
import UsersList from '../../components/Users/UsersList';
import { remove } from '../../api/User';

export function Users() {
  useInjectSaga(saga);

  const dispatch = useDispatch();
  const handleGetUsers = useCallback(() => dispatch(getUsers()), []);
  const handleDeleteUsers = useCallback(
    async (id) => {
      await remove(id);
      dispatch(getUsers());
    }, []
  );

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const users = useSelector(usersSelector);
  const loading = useSelector(loadingSelector);

  return  (
    <div>
      <UsersList users={users} onDeleteUsers={handleDeleteUsers} onGetUsers={handleGetUsers} loading={loading}/>
    </div>
  );
}

export default Users;
