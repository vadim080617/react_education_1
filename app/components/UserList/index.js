import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { FormattedMessage } from 'react-intl';
import CircularProgress from '@material-ui/core/CircularProgress';

import messages from './messages';

function UserList({ users, onGetUsers, loading }) {
  return (
    <div style={{ padding: 20 }}>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={onGetUsers}
          >
            <FormattedMessage {...messages.getUsers} />
          </Button>
        </Grid>
        <Grid item xs={10}>
          {loading && <CircularProgress />}
          <List component="nav" aria-label="main mailbox folders">
            {users.map(user => (
              <ListItem key={user.id}>
                <ListItemAvatar>
                  <Avatar src={user.avatar_url} />
                </ListItemAvatar>
                <ListItemText primary={user.login} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

UserList.propTypes = {
  onGetUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

UserList.defaultProps = {
  loading: false,
};

export default UserList;
