import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import PersonIcon from '@material-ui/icons/Person';

export function UsersList({ users, onGetUsers }) {
  return (
    <>
      <Button onClick={onGetUsers} variant="outlined" color="primary"><RefreshIcon /></Button>
      <List>
        {users.map(el =>
          <ListItem key={el.id}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={el.name}/>
          </ListItem>)
        }
      </List>
    </>
  );
}

export default UsersList;
