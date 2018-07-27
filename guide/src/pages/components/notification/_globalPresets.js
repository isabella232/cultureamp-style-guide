import {
  InlineNotification,
  GlobalNotification,
  ToastNotification,
} from 'cultureamp-style-guide/components/Notification/';
import React from 'react';

const presets = [
  {
    name: 'Affirmative',
    node: (
      <GlobalNotification type="affirmative" automationId="notification1">
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </GlobalNotification>
    ),
  },
  {
    name: 'Informative',
    node: (
      <GlobalNotification type="informative" automationId="notification1">
        New user data is currently being processed. We'll let you know when the
        process is completed. <a href="/">Manage users</a>
      </GlobalNotification>
    ),
  },
  {
    name: 'Cautionary',
    node: (
      <GlobalNotification type="cautionary" automationId="notification1">
        New user data, imported by mackenzie@hooli.com has uploaded with some
        minor issues. <a href="/">View issues</a>
      </GlobalNotification>
    ),
  },
  {
    name: 'Negative',
    node: (
      <GlobalNotification type="negative" automationId="notification1">
        Oh, snap! Some shit's just gone down. We're trying to fix it as quickly
        as possible. For assistance, please <a href="/">contact support</a>
      </GlobalNotification>
    ),
  },
  {
    name: 'Multiple notifications',
    node: (
      <div style={{ width: '100%' }}>
        <GlobalNotification type="affirmative" automationId="notification1">
          New user data, imported by mackenzie@hooli.com has successfully
          uploaded. <a href="/">Manage users is now available</a>
        </GlobalNotification>
        <GlobalNotification type="informative" automationId="notification2">
          New user data is currently being processed. We'll let you know when
          the process is completed. <a href="/">Manage users</a>
        </GlobalNotification>
        <GlobalNotification type="cautionary" automationId="notification3">
          New user data, imported by mackenzie@hooli.com has uploaded with some
          minor issues. <a href="/">View issues</a>
        </GlobalNotification>
        <GlobalNotification type="negative" automationId="notification4">
          Oh, snap! Some shit's just gone down. We're trying to fix it as
          quickly as possible. For assistance, please{' '}
          <a href="/">contact support</a>
        </GlobalNotification>
      </div>
    ),
  },
];

export default presets;
