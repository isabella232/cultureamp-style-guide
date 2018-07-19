import React from 'react';
import { mount } from 'enzyme';
import ToastNotification from '../ToastNotification';
import GenericNotification from '../components/GenericNotification';

test('The basic notification renders correctly', () => {
  const notification = mount(
    <ToastNotification type="positive" title="Success!">
      It worked!
    </ToastNotification>
  );
  expect(notification).toMatchSnapshot();
});

test('autohide and hideClose icon both work together correctly', () => {
  const notification = mount(
    <ToastNotification type="negative" title="Info" autohide hideCloseIcon>
      Currently processing...
    </ToastNotification>
  );
  expect(notification.find(GenericNotification).prop('autohide')).toBe(true);
  expect(notification.find(GenericNotification).prop('persistent')).toBe(true);
  expect(notification).toMatchSnapshot();
});

test('You cannot hide the close icon unless it is an autohide', () => {
  const notification = mount(
    <ToastNotification type="negative" title="Info" hideCloseIcon>
      Currently processing...
    </ToastNotification>
  );
  expect(notification.find(GenericNotification).prop('autohide')).toBe(false);
  expect(notification.find(GenericNotification).prop('persistent')).toBe(false);
  expect(notification).toMatchSnapshot();
});
