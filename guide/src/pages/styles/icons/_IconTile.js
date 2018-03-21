import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'cultureamp-style-guide/components/Icon/Icon.js';
import styles from './_IconGrid.module.scss';
import iconStyles from 'cultureamp-style-guide/components/Icon/Icon.module.scss';
import tick from 'cultureamp-style-guide/icons/check.svg';

class IconTile extends React.Component {
  state = {
    recentlyCopied: false,
  };

  render() {
    const { title, path, icon } = this.props;
    return (
      <button
        className={classNames({
          [styles.iconTile]: true,
          [styles.clicked]: this.state.recentlyCopied,
          [iconStyles.active]: this.state.recentlyCopied,
        })}
        onClick={e => this.copyPath()}
      >
        <div className={styles.tileWrapper}>
          <span className={styles.iconLabel}>
            <span className={styles.iconLabelText}>{title}</span>
          </span>
          <span className={styles.iconWrapper}>
            <Icon icon={icon} role="presentation" />
          </span>
          {this.renderCopyLabel()}
        </div>
      </button>
    );
  }

  renderCopyLabel() {
    const path = this.props.path,
      copied = this.state.recentlyCopied;
    return (
      <span className={styles.copyLabel}>
        {copied && (
          <span className={styles.tickIcon}>
            <Icon icon={tick} role="presentation" />
          </span>
        )}
        <span className={styles.copyLabelText}>
          {copied ? 'Copied to clipboard' : 'Copy import path'}
        </span>
        <input
          ref={i => (this.input = i)}
          value={path}
          readOnly={true}
          tabIndex={-1}
          aria-label="Icon Import Path"
          className={styles.pathInput}
        />
      </span>
    );
  }

  copyPath() {
    if (this.input) {
      this.input.select();
      document.execCommand('copy');
      this.setState({ recentlyCopied: true });
      setTimeout(() => this.setState({ recentlyCopied: false }), 2000);
    }
  }
}

IconTile.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default IconTile;
