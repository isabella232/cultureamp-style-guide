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
      <ToastNotification type="affirmative" title="Success!">
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Affirmative, Autohide',
    node: (
      <ToastNotification type="affirmative" title="Success!" autohide>
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Affirmative, Autohide, Hide Close Icon',
    node: (
      <ToastNotification
        type="affirmative"
        title="Success!"
        autohide
        hideCloseIcon
      >
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Informative',
    node: (
      <ToastNotification type="informative" title="Informative">
        New user data is currently being processed. We'll let you know when the
        process is completed. <a href="/">Manage users</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Warning',
    node: (
      <ToastNotification type="warning" title="Warning">
        New user data, imported by mackenzie@hooli.com has uploaded with some
        minor issues. <a href="/">View issues</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Negative',
    node: (
      <ToastNotification type="negative" title="Error">
        Oh, snap! Some shit's just gone down. We're trying to fix it as quickly
        as possible. For assistance, please <a href="/">contact support</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Multiple notifications',
    node: (
      <div>
        <ToastNotification type="affirmative" title="Success!">
          New user data, imported by mackenzie@hooli.com has successfully
          uploaded. <a href="/">Manage users is now available</a>
        </ToastNotification>
        <ToastNotification type="informative" title="Informative">
          New user data is currently being processed. We'll let you know when
          the process is completed. <a href="/">Manage users</a>
        </ToastNotification>
        <ToastNotification type="warning" title="Warning">
          New user data, imported by mackenzie@hooli.com has uploaded with some
          minor issues. <a href="/">View issues</a>
        </ToastNotification>
        <ToastNotification type="negative" title="Error">
          Oh, snap! Some shit's just gone down. We're trying to fix it as
          quickly as possible. For assistance, please{' '}
          <a href="/">contact support</a>
        </ToastNotification>
      </div>
    ),
  },
];

export default presets;
