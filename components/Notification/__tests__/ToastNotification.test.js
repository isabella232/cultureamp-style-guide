import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import ToastNotification from '../ToastNotification';

test('The basic notification renders correctly', () => {
  const notification = mount(
    <ToastNotification type="positive" title="Success!">
      It worked!
    </ToastNotification>
  );
  expect(notification.find('.cancel')).toHaveLength(1);
  expect(notification).toMatchSnapshot();
});

test('You can hide the close icon on an autohide toast notification', () => {
  const notification = mount(
    <ToastNotification type="negative" title="Info" autohide hideCloseIcon>
      Currently processing...
    </ToastNotification>
  );
  expect(notification.find('.cancel')).toHaveLength(0);
  expect(notification).toMatchSnapshot();
});

test('Autohide works as expected', () => {
  jest.useFakeTimers();

  const onHide = sinon.spy();
  const notification = mount(
    <ToastNotification
      type="positive"
      title="Success!"
      onHide={onHide}
      autohide
    >
      This is my positive notification
    </ToastNotification>
  );

  // On the first frame, 'fading' should be present so the notification transitions in from a hidden state
  expect(notification.find('div.notification').hasClass('fading')).toBe(true);

  // The element should then immediately transition in
  jest.advanceTimersByTime(1);
  notification.update();
  expect(notification.find('div.notification').hasClass('fading')).toBe(false);

  // The notification should still be visible for the first few seconds
  jest.advanceTimersByTime(4000);
  notification.update();
  expect(notification.find('div.notification').hasClass('fading')).toBe(false);

  // After 5s, the element should fade out, but the onHide will not trigger yet.
  jest.advanceTimersByTime(1000);
  notification.update();
  expect(notification.find('div.notification').hasClass('fading')).toBe(true);
  expect(onHide.callCount).toBe(0);

  // After the fade out animation has had time to run, the onHide handler should trigger.
  notification.find('div.notification').simulate('transitionend', {
    propertyName: 'margin-top',
  });
  notification.update();
  expect(onHide.callCount).toBe(1);
});
