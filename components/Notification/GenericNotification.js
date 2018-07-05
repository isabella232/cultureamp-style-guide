// @flow
import * as React from 'react';
import Icon from '../Icon/Icon';
import successIcon from '../../icons/success.svg';
import exclamationIcon from '../../icons/exclamation.svg';
import infoIcon from '../../icons/information.svg';
import closeIcon from '../../icons/close.svg';
import styles from './Notification.module.scss';
import classnames from 'classnames';

type Props = {|
  type: 'positive' | 'warning' | 'negative' | 'info',
  style: 'global' | 'normal' | 'toast',
  persistent?: boolean,
  title?: string,
  children?: ?React.Node,
  autohide?: ?boolean,
  onHide?: ?() => void | any,
|};

type State = {
  isFading: boolean,
};

class GenericNotification extends React.Component<Props, State> {
  state = {
    isFading: true,
  };

  componentDidMount() {
    requestAnimationFrame(() => this.setState({ isFading: false }));

    if (this.props.style === 'toast' && this.props.autohide) {
      setTimeout(() => this.triggerHide(), 5000);
    }
  }

  render() {
    return (
      <div className={this.determineClassName()}>
        <div className={styles.icon}>
          <Icon icon={this.getIconType()} role="presentation" inheritSize />
        </div>
        <div className={styles.textContainer}>
          {this.props.title && (
            <span className={styles.title}>{this.props.title}</span>
          )}
          <span className={styles.textWrapper}>
            <span className={styles.text}>{this.props.children}</span>
          </span>
        </div>
        {!this.props.persistent && this.renderCancelButton()}
      </div>
    );
  }

  determineClassName(): string {
    return classnames(
      styles.notification,
      styles[this.props.type],
      styles[this.props.style],
      {
        [styles.fading]: this.state.isFading,
      }
    );
  }

  getIconType() {
    switch (this.props.type) {
      case 'positive':
        return successIcon;
      case 'negative':
        return exclamationIcon;
      case 'warning':
        return exclamationIcon;
      case 'info':
        return infoIcon;
      default:
        return infoIcon;
    }
  }

  renderCancelButton() {
    return (
      <span className={styles.cancel} onClick={() => this.triggerHide()}>
        <span className={styles.cancelInner}>
          <Icon
            icon={closeIcon}
            role="img"
            title="close notification"
            inheritSize
          />
        </span>
      </span>
    );
  }

  triggerHide() {
    requestAnimationFrame(() => this.setState({ isFading: true }));

    setTimeout(() => {
      this.props.onHide && this.props.onHide();
    }, 600);
  }
}

export default GenericNotification;
