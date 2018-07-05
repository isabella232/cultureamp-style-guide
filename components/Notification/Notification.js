// @flow
import * as React from 'react';
import GenericNotification from './GenericNotification';

type Props = {|
  type: 'positive' | 'warning' | 'negative' | 'info',
  title: string,
  children: React.Node,
  persistent?: boolean,
  onHide?: () => void,
|};

const Notification = (props: Props) => (
  <GenericNotification style="normal" {...props} />
);

export default Notification;
