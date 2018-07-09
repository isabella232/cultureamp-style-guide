// @flow
import * as React from 'react';
import GenericNotification from './GenericNotification';

type Props = {|
  type: 'affirmative' | 'informative' | 'warning' | 'negative',
  persistent: boolean,
  title: string,
  children: React.Node,
  autohide?: ?boolean,
  onHide?: () => void,
|};

const ToastNotification = (props: Props) => (
  <GenericNotification style="toast" {...props} />
);

export default ToastNotification;
