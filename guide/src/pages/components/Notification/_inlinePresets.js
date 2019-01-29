import {
  InlineNotification,
  GlobalNotification,
  ToastNotification,
} from '@cultureamp/kaizen/components/Notification';
import React from 'react';

const presets = [
  {
    name: 'Affirmative',
    node: (
      <InlineNotification
        type="affirmative"
        title="Success!"
        automationId="notification1"
      >
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Informative',
    node: (
      <InlineNotification
        type="informative"
        title="Informative"
        automationId="notification1"
      >
        New user data is currently being processed. We'll let you know when the
        process is completed. <a href="/">Manage users</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Cautionary',
    node: (
      <InlineNotification
        type="cautionary"
        title="Warning"
        automationId="notification1"
      >
        New user data, imported by mackenzie@hooli.com has uploaded with some
        minor issues. <a href="/">View issues</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Negative',
    node: (
      <InlineNotification
        type="negative"
        title="No network connection"
        automationId="notification1"
      >
        Check your connection and try again. <a href="/">Refresh</a>.
      </InlineNotification>
    ),
  },
  {
    name: 'Persistent, Affirmative',
    node: (
      <InlineNotification
        type="affirmative"
        title="Success!"
        persistent
        automationId="notification1"
      >
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Persistent, Informative',
    node: (
      <InlineNotification
        type="informative"
        title="Informative"
        persistent
        automationId="notification1"
      >
        New user data is currently being processed. We'll let you know when the
        process is completed. <a href="/">Manage users</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Persistent, Cautionary',
    node: (
      <InlineNotification
        type="cautionary"
        title="Warning"
        persistent
        automationId="notification1"
      >
        New user data, imported by mackenzie@hooli.com has uploaded with some
        minor issues. <a href="/">View issues</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Persistent, Negative',
    node: (
      <InlineNotification
        type="negative"
        title="No network connection"
        automationId="notification1"
      >
        Check your connection and try again. <a href="/">Refresh</a>.
      </InlineNotification>
    ),
  },
  {
    name: 'Multiline',
    node: (
      <InlineNotification
        type="negative"
        title="Error"
        automationId="notification1"
      >
        There’s a problem connecting to your HRIS. Check your HRIS is working
        and check your<a href="/">integration settings</a>, or if you require
        more assistance please <a href="/">contact support</a>.
      </InlineNotification>
    ),
  },
  {
    name: 'Multiline, Persistent',
    node: (
      <InlineNotification
        type="negative"
        title="Error"
        persistent
        automationId="notification1"
      >
        There’s a problem connecting to your HRIS. Check your HRIS is working
        and check your<a href="/">integration settings</a>, or if you require
        more assistance please <a href="/">contact support</a>.
      </InlineNotification>
    ),
  },
  {
    name: 'Slim',
    node: (
      <InlineNotification
        type="affirmative"
        title="Success!"
        automationId="notification1"
      >
        <a href="/">Manage users is now available</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Slim, Persistent',
    node: (
      <InlineNotification
        type="affirmative"
        title="Success!"
        persistent
        automationId="notification1"
      >
        <a href="/">Manage users is now available</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Multiple notifications',
    node: (
      <div style={{ width: '100%' }}>
        <InlineNotification
          type="affirmative"
          title="Success!"
          automationId="notification1"
        >
          New user data, imported by mackenzie@hooli.com has successfully
          uploaded. <a href="/">Manage users is now available</a>
        </InlineNotification>
        <InlineNotification
          type="informative"
          title="Informative"
          automationId="notification2"
        >
          New user data is currently being processed. We'll let you know when
          the process is completed. <a href="/">Manage users</a>
        </InlineNotification>
        <InlineNotification
          type="cautionary"
          title="Warning"
          automationId="notification3"
        >
          New user data, imported by mackenzie@hooli.com has uploaded with some
          minor issues. <a href="/">View issues</a>
        </InlineNotification>
        <InlineNotification
          type="negative"
          title="No network connection"
          automationId="notification4"
        >
          Check your connection and try again. <a href="/">Refresh</a>.
        </InlineNotification>
      </div>
    ),
  },
];

export default presets;
