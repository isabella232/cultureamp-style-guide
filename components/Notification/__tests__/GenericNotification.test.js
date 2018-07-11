import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import GenericNotification from '../GenericNotification';

beforeEach(() => {
  jest.useFakeTimers();
});

test('Begins with "fading" but transitions out of it immediately', () => {
  const notification = mount(
    <GenericNotification type="positive" style="inline" title="Success!">
      This is my positive notification
    </GenericNotification>
  );

  expect(notification.find('div.notification').hasClass('fading')).toBe(true);
  jest.advanceTimersByTime(1);
  notification.update();
  expect(notification.find('div.notification').hasClass('fading')).toBe(false);
});

test('The cancel button hides the notification and triggers the onHide callback', () => {
  const onHide = sinon.spy();
  const notification = mount(
    <GenericNotification
      type="positive"
      style="inline"
      title="Success!"
      onHide={onHide}
    >
      This is my positive notification
    </GenericNotification>
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
  notification.find('div.notification').simulate('transitionend', {
    propertyName: 'margin-top',
  });
  notification.update();
  expect(onHide.callCount).toBe(1);
});
