// @flow
import * as React from 'react';
import GenericNotification from './GenericNotification';

type Props = {|
  type: 'affirmative' | 'informative' | 'warning' | 'negative',
  title: string,
  children: React.Node,
  persistent?: boolean,
  onHide?: () => void,
|};

const InlineNotification = (props: Props) => (
  <GenericNotification style="normal" {...props} />
);

export default InlineNotification;
