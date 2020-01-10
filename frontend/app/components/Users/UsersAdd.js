import React from 'react';
import { useFormik } from 'formik';
import { store } from '../../api/User';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Typography from '@material-ui/core/Typography';

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length < 4) {
        errors.name = 'Must be 4 characters or more';
    }

    return errors;
};

export function UsersAdd() {
    const history = useHistory();

    async function onSubmit(data) {
        await store(data);
        history.push('/users');
    }

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        validate,
        onSubmit,
    });

    return (
      <div>
          <Typography variant="h4" gutterBottom>
              <FormattedMessage {...messages.addUser} />
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
    );
}

export default UsersAdd;
