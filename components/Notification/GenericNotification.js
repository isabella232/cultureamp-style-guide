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
  hidden: boolean,
  removed: boolean,
};

class GenericNotification extends React.Component<Props, State> {
  state = {
    hidden: true,
    removed: false,
  };
  container: ?Element;

  componentDidMount() {
    requestAnimationFrame(() => this.setState({ hidden: false }));

    if (this.props.style === 'toast' && this.props.autohide) {
      setTimeout(() => this.hide(), 5000);
    }
  }

  render() {
    if (this.state.removed) {
      return null;
    }
    return (
      <div
        className={this.className()}
        style={{ marginTop: this.marginTop() }}
        ref={div => (this.container = div)}
        onTransitionEnd={e => this.onTransitionEnd(e)}
      >
        <div className={styles.icon}>
          <Icon icon={this.iconType()} role="presentation" inheritSize />
        </div>
        <div className={styles.textContainer}>
          {this.props.title && (
            <span className={styles.title}>{this.props.title}</span>
          )}
          <span className={styles.textWrapper}>
            <span className={styles.text}>{this.props.children}</span>
          </span>
        </div>
        {!this.props.persistent && <CancelButton onClick={() => this.hide()} />}
      </div>
    );
  }

  className(): string {
    return classnames(
      styles.notification,
      styles[this.props.type],
      styles[this.props.style],
      {
        [styles.hidden]: this.state.hidden,
      }
    );
  }

  marginTop(): ?string {
    if (this.state.hidden && this.container) {
      const container = this.container,
        height = container.getBoundingClientRect().height,
        style = getComputedStyle(container),
        bottomMargin = parseInt(style.marginBottom, 10);
      return -(height + bottomMargin) + 'px';
    }
  }

  onTransitionEnd(e: TransitionEvent) {
    // Be careful: this assumes the final CSS property to be animated is "margin-top".
    if (this.state.hidden && e.propertyName === 'margin-top') {
      this.setState({ removed: true });
      if (this.props.onHide) {
        this.props.onHide();
      }
    }
  }

  iconType() {
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

  hide() {
    this.setState({ hidden: true });
  }

  static defaultProps = {
    persistent: false,
    autohide: false,
  };
}

const CancelButton = ({ onClick }) => (
  <button className={styles.cancel} onClick={onClick}>
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

export default GenericNotification;
