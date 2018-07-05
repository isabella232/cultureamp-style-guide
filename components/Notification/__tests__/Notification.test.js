import React from 'react';
import { mount } from 'enzyme';
import Notification from '../Notification';

test('The basic notification renders correctly', () => {
  const notification = mount(
    <Notification type="warning" title="Warning">
      Something has gone wrong
    </Notification>
  );
  expect(notification.find('.cancel')).toHaveLength(1);
  expect(notification).toMatchSnapshot();
});

test('Persistent versions of the notifications work', () => {
  const notification = mount(
    <Notification type="negative" title="Error" persistent>
      Something has gone wrong
    </Notification>
  );
  expect(notification.find('.cancel')).toHaveLength(0);
  expect(notification).toMatchSnapshot();
});
