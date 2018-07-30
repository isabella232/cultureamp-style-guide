// @flow
import * as React from 'react';
import GenericNotification from './components/GenericNotification';
import type { NotificationType } from './components/GenericNotification';

type Props = {|
  type: NotificationType,
  title: string,
  children: React.Node,
  persistent: boolean,
  onHide?: () => void,
  automationId?: string,
|};

const InlineNotification = (props: Props) => (
  <GenericNotification style="inline" {...props} />
);

InlineNotification.defaultProps = {
  persistent: false,
};

export default InlineNotification;
