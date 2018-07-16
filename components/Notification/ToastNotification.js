// @flow
import * as React from 'react';
import GenericNotification from './GenericNotification';
import type { NotificationType } from './GenericNotification';

type Props = {|
  type: NotificationType,
  title: string,
  children: React.Node,
  autohide: boolean,
  hideCloseIcon: boolean,
  onHide?: () => void,
|};

const ToastNotification = (props: Props) => {
  const persistent = props.autohide && props.hideCloseIcon;
  return (
    <GenericNotification
      style="toast"
      persistent={persistent}
      type={props.type}
      title={props.title}
      autohide={props.autohide}
      onHide={props.onHide}
    >
      {props.children}
    </GenericNotification>
  );
};

ToastNotification.defaultProps = {
  autohide: false,
  hideCloseIcon: false,
};

export default ToastNotification;
