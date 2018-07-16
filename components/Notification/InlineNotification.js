// @flow
import * as React from 'react';
import GenericNotification from './GenericNotification';
import type { NotificationType } from './GenericNotification';

type Props = {|
  type: NotificationType,
  title: string,
  children: React.Node,
  persistent: boolean,
  onHide?: () => void,
|};

const InlineNotification = (props: Props) => (
  <GenericNotification style="inline" {...props} />
);

InlineNotification.defaultProps = {
  persistent: false,
};

export default InlineNotification;
