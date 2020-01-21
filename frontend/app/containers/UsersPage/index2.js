import React, {useState, useEffect} from 'react';

import { index, remove } from '../../api/User';
import UsersList from '../../components/Users/UsersList';


export function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function handleGetUsers() {
      setLoading(true);
      const users = await index();
      setUsers(users);
      setLoading(false);
  }

  async function handleDeleteUsers(id) {
      setLoading(true);
      await remove(id);
      await handleGetUsers();
      setLoading(false);
  }

  useEffect(() => {
      handleGetUsers();
  }, []);

  return  (
    <div>
      <UsersList users={users} onDeleteUsers={handleDeleteUsers} onGetUsers={handleGetUsers} loading={loading}/>
    </div>
  );
}

export default Users;
