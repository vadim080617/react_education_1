import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';

export function UsersList({ users, onGetUsers, loading, onDeleteUsers }) {
  return (
    <>
      <Link to={"/users/add"}>
        <Button onClick={onGetUsers} variant="outlined" color="primary">
          {
            <AddIcon />
          }
        </Button>
      </Link>
      <Button onClick={onGetUsers} variant="outlined" color="primary" disabled={loading}>
        {
          loading ? <CircularProgress size={20}/> : <RefreshIcon />
        }
      </Button>
      <List>
        {users.map(el =>
          <ListItem key={el.id}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={el.name}/>
            <Link to={`/users/edit/${el.id}`}>
              <Button>
                  <EditIcon/>
              </Button>
            </Link>
            <Button onClick={onDeleteUsers.bind(null, el.id)}>
              <DeleteIcon/>
            </Button>
          </ListItem>)
        }
      </List>
    </>
  );
}

export default UsersList;
