// @flow
import * as React from 'react';
import GenericNotification from './GenericNotification';

type Props = {|
  type: 'positive' | 'warning' | 'negative' | 'info',
  children: React.Node,
  onHide?: () => void,
|};

const GlobalNotification = (props: Props) => (
  <GenericNotification style="global" persistent={false} {...props} />
);

export default GlobalNotification;
