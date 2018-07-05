// @flow
import * as React from 'react';
import GenericNotification from './GenericNotification';

type Props = {|
  type: 'positive' | 'warning' | 'negative' | 'info',
  persistent: boolean,
  title: string,
  children: React.Node,
  autohide?: ?boolean,
  onHide?: ?() => void | any,
|};

const ToastNotification = (props: Props) => (
  <GenericNotification style="toast" {...props} />
);

export default ToastNotification;
