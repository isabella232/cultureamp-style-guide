import {
  InlineNotification,
  GlobalNotification,
  ToastNotification,
} from 'cultureamp-style-guide/components/Notification/';
import React from 'react';

const presets = [
  {
    name: 'Toast (Affirmative, Autohide)',
    node: (
      <ToastNotification type="affirmative" title="Success!" autohide>
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Toast (Informative)',
    node: (
      <ToastNotification type="informative" title="Informative">
        New user data is currently being processed. We'll let you know when the
        process is completed. <a href="/">Manage users</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Toast (Warning)',
    node: (
      <ToastNotification type="warning" title="Warning">
        New user data, imported by mackenzie@hooli.com has uploaded with some
        minor issues. <a href="/">View issues</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Toast (Negative)',
    node: (
      <ToastNotification type="negative" title="Error">
        Oh, snap! Some shit's just gone down. We're trying to fix it as quickly
        as possible. For assistance, please <a href="/">contact support</a>
      </ToastNotification>
    ),
  },
];

export default presets;
