import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Notification from '../Notification';

beforeEach(() => {
  jest.useFakeTimers();
});

test('Begins with "fading" but transitions out of it immediately', () => {
  const notification = mount(
    <Notification type="positive" title="Success!">
      This is my positive notification
    </Notification>
  );

  expect(notification.find('div.notification').hasClass('fading')).toBe(true);
  jest.advanceTimersByTime(1);
  notification.update();
  expect(notification.find('div.notification').hasClass('fading')).toBe(false);
});

test('The cancel button hides the notification and triggers the onHide callback', () => {
  const onHide = sinon.spy();
  const notification = mount(
    <Notification type="positive" title="Success!" onHide={onHide}>
      This is my positive notification
    </Notification>
  );

  // At first, the element should be visible (not fading)
  jest.advanceTimersByTime(1);
  notification.update();
  expect(notification.find('div.notification').hasClass('fading')).toBe(false);

  // After clicking, the element should fade out, but the onHide not trigger yet.
  notification.find('.cancel').simulate('click');
  jest.advanceTimersByTime(1);
  notification.update();
  expect(notification.find('div.notification').hasClass('fading')).toBe(true);
  expect(onHide.callCount).toBe(0);

  // After the fade out animation has had time to run, the onHide handler should trigger.
  jest.advanceTimersByTime(600);
  notification.update();
  expect(onHide.callCount).toBe(1);
});
