import React from 'react';
import { mount } from 'enzyme';
import InlineNotification from '../InlineNotification';

test('The basic notification renders correctly', () => {
  const notification = mount(
    <InlineNotification type="cautionary" title="Warning">
      Something has gone wrong
    </InlineNotification>
  );
  expect(notification.find('.cancel')).toHaveLength(1);
  expect(notification).toMatchSnapshot();
});

test('Persistent versions of the notifications work', () => {
  const notification = mount(
    <InlineNotification type="negative" title="Error" persistent>
      Something has gone wrong
    </InlineNotification>
  );
  expect(notification.find('.cancel')).toHaveLength(0);
  expect(notification).toMatchSnapshot();
});
