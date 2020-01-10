/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.UsersList';

export default defineMessages({
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Submit',
  },
  addUser: {
    id: `${scope}.addUser`,
    defaultMessage: 'Add user',
  },
  editUser: {
    id: `${scope}.editUser`,
    defaultMessage: 'Edit user',
  },
});
