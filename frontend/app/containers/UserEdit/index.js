import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { edit, show, store } from '../../api/User';

import UsersEdit from '../../components/Users/UsersEdit';

export default function UserEdit() {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState('');

  useEffect(() => {
    if (id) {
      async function getUser(id) {
        const data = await show(id);
        setName(data.name);
      }

      getUser(id);
    }
  }, []);

  const onSubmit = useCallback(async (data) => {
    if (id) {
      await edit(id, data);
      history.push('/users');
    } else {
      await store(data);
      history.push('/users');
    }
  }, [history]);

    return (
      <div>
        <UsersEdit name={name} onSubmit={onSubmit}/>
      </div>
    )
}
