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
      <ToastNotification
        type="affirmative"
        title="Success!"
        automationId="notification1"
      >
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Affirmative, Autohide',
    node: (
      <ToastNotification
        type="affirmative"
        title="Success!"
        autohide
        automationId="notification1"
      >
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Affirmative, Autohide, Hide Close Icon',
    node: (
      <ToastNotification
        automationId="notification1"
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
      <ToastNotification
        type="informative"
        title="Informative"
        automationId="notification1"
      >
        New user data is currently being processed. We'll let you know when the
        process is completed. <a href="/">Manage users</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Cautionary',
    node: (
      <ToastNotification
        type="cautionary"
        title="Warning"
        automationId="notification1"
      >
        New user data, imported by mackenzie@hooli.com has uploaded with some
        minor issues. <a href="/">View issues</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Negative',
    node: (
      <ToastNotification
        type="negative"
        title="No network connection"
        automationId="notification1"
      >
        Check your connection and try again. <a href="/">Refresh</a>.
      </ToastNotification>
    ),
  },
  {
    name: 'Multiple notifications',
    node: (
      <div>
        <ToastNotification
          type="affirmative"
          title="Success!"
          automationId="notification1"
        >
          New user data, imported by mackenzie@hooli.com has successfully
          uploaded. <a href="/">Manage users is now available</a>
        </ToastNotification>
        <ToastNotification
          type="informative"
          title="Informative"
          automationId="notification2"
          autohide
          hideCloseIcon
        >
          New user data is currently being processed. We'll let you know when
          the process is completed. <a href="/">Manage users</a>
        </ToastNotification>
        <ToastNotification
          type="cautionary"
          title="Warning"
          automationId="notification3"
          autohide
        >
          New user data, imported by mackenzie@hooli.com has uploaded with some
          minor issues. <a href="/">View issues</a>
        </ToastNotification>
        <ToastNotification
          type="negative"
          title="No network connection"
          automationId="notification4"
        >
          Check your connection and try again. <a href="/">Refresh</a>.
        </ToastNotification>
      </div>
    ),
  },
];

export default presets;
