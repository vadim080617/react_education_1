import React, { useEffect } from 'react';
import { useInjectSaga } from '../../utils/injectSaga';
import saga from './saga';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './actions';
import { usersSelector } from './selectors';
import UsersList from '../../components/Users/UsersList';

export function Users() {
  useInjectSaga(saga);

  const dispatch = useDispatch();
  const handleGetUsers = () => dispatch(getUsers());

  useEffect(() => {
    console.log('useEffect');
    dispatch(getUsers());
  }, []);

  const users = useSelector(usersSelector);

  return  (
    <div>
      <UsersList users={users} onGetUsers={handleGetUsers}/>
    </div>
  );
}

export default Users;
