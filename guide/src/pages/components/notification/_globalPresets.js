import {
  InlineNotification,
  GlobalNotification,
  ToastNotification,
} from 'cultureamp-style-guide/components/Notification/';
import React from 'react';

const presets = [
  {
    name: 'Global (Affirmative)',
    node: (
      <GlobalNotification type="affirmative">
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </GlobalNotification>
    ),
  },
  {
    name: 'Global (Informative)',
    node: (
      <GlobalNotification type="informative">
        New user data is currently being processed. We'll let you know when the
        process is completed. <a href="/">Manage users</a>
      </GlobalNotification>
    ),
  },
  {
    name: 'Global (Warning)',
    node: (
      <GlobalNotification type="warning">
        New user data, imported by mackenzie@hooli.com has uploaded with some
        minor issues. <a href="/">View issues</a>
      </GlobalNotification>
    ),
  },
  {
    name: 'Global (Negative)',
    node: (
      <GlobalNotification type="negative">
        Oh, snap! Some shit's just gone down. We're trying to fix it as quickly
        as possible. For assistance, please <a href="/">contact support</a>
      </GlobalNotification>
    ),
  },
];

export default presets;
