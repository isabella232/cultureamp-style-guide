import {
  InlineNotification,
  GlobalNotification,
  ToastNotification,
} from 'cultureamp-style-guide/components/Notification/';
import React from 'react';

const presets = [
  {
    name: 'Inline (Affirmative)',
    node: (
      <InlineNotification type="affirmative" title="Success!">
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Inline (Informative)',
    node: (
      <InlineNotification type="informative" title="Informative">
        New user data is currently being processed. We'll let you know when the
        process s completed. <a href="/">Manage users</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Inline (Warning)',
    node: (
      <InlineNotification type="warning" title="Warning">
        New user data, imported by mackenzie@hooli.com has uploaded with some
        minor issues. <a href="/">View issues</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Inline (Negative)',
    node: (
      <InlineNotification type="negative" title="Error">
        Oh, snap! Some shit's just gone down. We're trying to fix it as quickly
        as possible. For assistance, please <a href="/">contact support</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Inline (Persistent, Affirmative)',
    node: (
      <InlineNotification type="affirmative" title="Success!" persistent>
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Inline (Persistent, Informative)',
    node: (
      <InlineNotification type="informative" title="Informative" persistent>
        New user data is currently being processed. We'll let you know when the
        process s completed. <a href="/">Manage users</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Inline (Persistent, Warning)',
    node: (
      <InlineNotification type="warning" title="Warning" persistent>
        New user data, imported by mackenzie@hooli.com has uploaded with some
        minor issues. <a href="/">View issues</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Inline (Persistent, Negative)',
    node: (
      <InlineNotification type="negative" title="Error" persistent>
        Oh, snap! Some shit's just gone down. We're trying to fix it as quickly
        as possible. For assistance, please <a href="/">contact support</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Inline (Multiline)',
    node: (
      <InlineNotification type="negative" title="Error">
        There’s a problem connecting to your HRIS. Check your HRIS is working
        and check your<a href="/">integration settings</a>, or if you require
        more assistance please <a href="/">contact support</a>.
      </InlineNotification>
    ),
  },
  {
    name: 'Inline (Multiline, Persistent)',
    node: (
      <InlineNotification type="negative" title="Error" persistent>
        There’s a problem connecting to your HRIS. Check your HRIS is working
        and check your<a href="/">integration settings</a>, or if you require
        more assistance please <a href="/">contact support</a>.
      </InlineNotification>
    ),
  },
  {
    name: 'Inline (Slim)',
    node: (
      <InlineNotification type="affirmative" title="Success!">
        <a href="/">Manage users is now available</a>
      </InlineNotification>
    ),
  },
  {
    name: 'Inline (Slim, Persistent)',
    node: (
      <InlineNotification type="affirmative" title="Success!" persistent>
        <a href="/">Manage users is now available</a>
      </InlineNotification>
    ),
  },
];

export default presets;
