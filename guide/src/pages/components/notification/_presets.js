import Notification, {
  GlobalNotification,
  ToastNotification,
} from 'cultureamp-style-guide/components/Notification/';
import React from 'react';

const iconPresets = [
  {
    name: 'Normal',
    node: (
      <Notification type="positive" title="Success!">
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </Notification>
    ),
  },
  {
    name: 'Normal Persistent',
    node: (
      <Notification type="positive" title="Success!" persistent>
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </Notification>
    ),
  },
  {
    name: 'Slim',
    node: (
      <Notification type="positive" title="Success!">
        <a href="/">Manage users is now available</a>
      </Notification>
    ),
  },
  {
    name: 'Slim Persistent',
    node: (
      <Notification type="positive" title="Success!" persistent>
        <a href="/">Manage users is now available</a>
      </Notification>
    ),
  },
  {
    name: 'Positive',
    node: (
      <Notification type="positive" title="Success!">
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </Notification>
    ),
  },
  {
    name: 'Info',
    node: (
      <Notification type="info" title="Information">
        New user data is currently being processed. We'll let you know when the
        process s completed. <a href="/">Manage users</a>
      </Notification>
    ),
  },
  {
    name: 'Warning',
    node: (
      <Notification type="warning" title="Warning">
        New user data, imported by mackenzie@hooli.com has uploaded with some
        minor issues. <a href="/">View issues</a>
      </Notification>
    ),
  },
  {
    name: 'Negative',
    node: (
      <Notification type="negative" title="Error">
        Oh, snap! Some shit's just gone down. We're trying to fix it as quickly
        as possible. For assistance, please <a href="/">contact support</a>
      </Notification>
    ),
  },
  {
    name: 'Persistent, Positive',
    node: (
      <Notification type="positive" title="Success!" persistent>
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </Notification>
    ),
  },
  {
    name: 'Persistent, Info',
    node: (
      <Notification type="info" title="Information" persistent>
        New user data is currently being processed. We'll let you know when the
        process s completed. <a href="/">Manage users</a>
      </Notification>
    ),
  },
  {
    name: 'Persistent, Warning',
    node: (
      <Notification type="warning" title="Warning" persistent>
        New user data, imported by mackenzie@hooli.com has uploaded with some
        minor issues. <a href="/">View issues</a>
      </Notification>
    ),
  },
  {
    name: 'Persistent, Negative',
    node: (
      <Notification type="negative" title="Error" persistent>
        Oh, snap! Some shit's just gone down. We're trying to fix it as quickly
        as possible. For assistance, please <a href="/">contact support</a>
      </Notification>
    ),
  },
  {
    name: 'Toast (Positive)',
    node: (
      <ToastNotification type="positive" title="Success!">
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Toast (Positive, Autohide)',
    node: (
      <ToastNotification type="positive" title="Success!" autohide>
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Toast (Information)',
    node: (
      <ToastNotification type="info" title="Information">
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
  {
    name: 'Toast (Persistent, Positive)',
    node: (
      <ToastNotification type="positive" title="Success!" persistent>
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Toast (Persistent, Information)',
    node: (
      <ToastNotification type="info" title="Information" persistent>
        New user data is currently being processed. We'll let you know when the
        process is completed. <a href="/">Manage users</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Toast (Persistent, Warning)',
    node: (
      <ToastNotification type="warning" title="Warning" persistent>
        New user data, imported by mackenzie@hooli.com has uploaded with some
        minor issues. <a href="/">View issues</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Toast (Persistent, Negative)',
    node: (
      <ToastNotification type="negative" title="Error" persistent>
        Oh, snap! Some shit's just gone down. We're trying to fix it as quickly
        as possible. For assistance, please <a href="/">contact support</a>
      </ToastNotification>
    ),
  },
  {
    name: 'Global (Positive)',
    node: (
      <GlobalNotification type="positive">
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </GlobalNotification>
    ),
  },
  {
    name: 'Global (Information)',
    node: (
      <GlobalNotification type="info">
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

export default iconPresets;
