import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import GenericNotification from '../GenericNotification';
import styles from '../GenericNotification.module.scss';

beforeEach(() => {
  jest.useFakeTimers();
});

test('Begins "hidden" but transitions out of it immediately', () => {
  const notification = mount(
    <GenericNotification type="positive" style="inline" title="Success!">
      This is my positive notification
    </GenericNotification>
  );

  expect(notification.childAt(0).hasClass(styles.hidden)).toBe(true);
  jest.advanceTimersByTime(1);
  notification.update();
  expect(notification.childAt(0).hasClass(styles.hidden)).toBe(false);
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

  // The element should start in a "hidden" state
  expect(notification.state('hidden')).toBe(true);
  expect(notification.state('removed')).toBe(false);
  expect(onHide.callCount).toBe(0);

  // It should immediately start transitioning into a visible state
  jest.advanceTimersByTime(1);
  notification.update();
  expect(notification.state('hidden')).toBe(false);
  expect(notification.state('removed')).toBe(false);
  expect(onHide.callCount).toBe(0);
  expect(notification).toMatchSnapshot();

  // After clicking, the element should fade out, but the onHide not trigger yet.
  notification.find('.' + styles.cancel).simulate('click');
  jest.advanceTimersByTime(1);
  notification.update();
  expect(notification.state('hidden')).toBe(true);
  expect(notification.state('removed')).toBe(false);
  expect(onHide.callCount).toBe(0);
  expect(notification).toMatchSnapshot();

  // After the fade out animation has finished, the onHide handler should trigger.
  notification.children().simulate('transitionend', {
    propertyName: 'margin-top',
  });
  notification.update();
  expect(notification.state('hidden')).toBe(true);
  expect(notification.state('removed')).toBe(true);
  expect(onHide.callCount).toBe(1);
  expect(notification).toMatchSnapshot();
});

test('If autohide is specified, we should start hiding after 5s', () => {
  const notification = mount(
    <GenericNotification
      type="positive"
      style="toast"
      title="Success!"
      autohide
    >
      This is my positive notification
    </GenericNotification>
  );

  // After 4s, it should still be visible
  jest.advanceTimersByTime(4999);
  notification.update();
  expect(notification.state('hidden')).toBe(false);

  // After 5s, it should be fading out to "hidden"
  jest.advanceTimersByTime(1);
  notification.update();
  expect(notification.state('hidden')).toBe(true);
});
