import React, { useState, useEffect } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
import { edit, show } from '../../api/User';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 4) {
    errors.name = 'Must be 4 characters or more';
  }

  return errors;
};

export function UsersEdit() {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState('');

  useEffect(() => {
    show(id).then(data => setName(data.name));
  }, []);

  async function onSubmit(data) {
    await edit(id, data);
    history.push('/users');
  }

  const formik = useFormik({
    initialValues: {
      name,
    },
    validate,
    onSubmit,
    enableReinitialize: true
  });

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        <FormattedMessage {...messages.editUser} />
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              error={!!formik.errors.name}
              id="name"
              label="Name"
              helperText={formik.errors.name}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button type="submit" variant="contained" color="primary">
              <FormattedMessage {...messages.submit} />
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default UsersEdit;
