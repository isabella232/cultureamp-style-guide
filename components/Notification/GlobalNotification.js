// @flow
import * as React from 'react';
import GenericNotification from './GenericNotification';
import type { NotificationType } from './GenericNotification';

type Props = {|
  type: NotificationType,
  children: React.Node,
  onHide?: () => void,
|};

const GlobalNotification = (props: Props) => (
  <GenericNotification style="global" persistent={false} {...props} />
);

export default GlobalNotification;
