/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.UserList';

export default defineMessages({
  getUsers: {
    id: `${scope}.getUsers`,
    defaultMessage: 'Get users.',
  },
});
