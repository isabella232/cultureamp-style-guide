import React from 'react';
import { mount } from 'enzyme';
import GlobalNotification from '../GlobalNotification';

test('The basic notification renders correctly', () => {
  const notification = mount(
    <GlobalNotification type="positive">
      This is my positive notification
    </GlobalNotification>
  );
  expect(notification).toMatchSnapshot();
});

test('You can change the type', () => {
  const notification = mount(
    <GlobalNotification type="info">
      This is my <em>informational</em> notification
    </GlobalNotification>
  );
  expect(notification).toMatchSnapshot();
});
