// @flow
import * as React from 'react';
import Icon from '../Icon/Icon';
import successIcon from '../../icons/success.svg';
import exclamationIcon from '../../icons/exclamation.svg';
import infoIcon from '../../icons/information.svg';
import closeIcon from '../../icons/close.svg';
import styles from './GenericNotification.module.scss';
import classnames from 'classnames';

export type NotificationType =
  | 'affirmative'
  | 'informative'
  | 'warning'
  | 'negative';

type Props = {|
  type: NotificationType,
  style: 'global' | 'inline' | 'toast',
  children: React.Node,
  title?: string,
  persistent: boolean,
  autohide: boolean,
  onHide?: () => void,
|};

type State = {
  isFading: boolean,
  isRemoved: boolean,
};

class GenericNotification extends React.Component<Props, State> {
  state = {
    isFading: true,
    isRemoved: false,
  };
  container: ?Element;

  componentDidMount() {
    requestAnimationFrame(() => this.setState({ isFading: false }));

    if (this.props.style === 'toast' && this.props.autohide) {
      setTimeout(() => this.triggerHide(), 5000);
    }
  }

  render() {
    if (this.state.isRemoved) {
      return null;
    }
    return (
      <div
        className={this.determineClassName()}
        style={{ marginTop: this.getMarginTop() }}
        ref={div => (this.container = div)}
        onTransitionEnd={e => this.onTransitionEnd(e)}
      >
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

  getMarginTop(): ?string {
    if (this.state.isFading && this.container) {
      const container = this.container,
        height = container.getBoundingClientRect().height,
        style = getComputedStyle(container),
        bottomMargin = parseInt(style.marginBottom, 10);
      return -(height + bottomMargin) + 'px';
    }
  }

  onTransitionEnd(e: TransitionEvent) {
    if (this.state.isFading && e.propertyName === 'margin-top') {
      this.setState({ isRemoved: true });
      if (this.props.onHide) {
        this.props.onHide();
      }
    }
  }

  getIconType() {
    switch (this.props.type) {
      case 'affirmative':
        return successIcon;
      case 'negative':
        return exclamationIcon;
      case 'warning':
        return exclamationIcon;
      case 'informative':
        return infoIcon;
      default:
        return infoIcon;
    }
  }

  renderCancelButton() {
    return (
      <button className={styles.cancel} onClick={() => this.triggerHide()}>
        <span className={styles.cancelInner}>
          <Icon
            icon={closeIcon}
            role="img"
            title="close notification"
            inheritSize
          />
        </span>
      </button>
    );
  }

  triggerHide() {
    this.setState({ isFading: true });
  }
}

GenericNotification.defaultProps = {
  persistent: false,
  autohide: false,
};

export default GenericNotification;
