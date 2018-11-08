// @flow
import React from 'react';
import classNames from 'classnames';

import styles from './Link.module.scss';
import Icon from '../../Icon';
import type { SvgAsset } from '../../Icon/Icon.js';
import Tooltip from './Tooltip.js';

type Props = {|
  icon?: SvgAsset,
  text: string,
  iconOnly: boolean,
  href: string,
  active: boolean,
  id?: string,
  secondary: boolean,
  onClick?: (event: SyntheticMouseEvent<>) => void,
  tooltip?: string,
  target: '_self' | '_blank',
|};

class Link extends React.Component<Props> {
  renderLink = () => {
    const {
      icon,
      text,
      href,
      active,
      id,
      onClick,
      secondary,
      iconOnly,
      target,
    } = this.props;

    return (
      <a
        className={classNames(styles.link, {
          [styles.active]: active,
          [styles.containsText]: typeof text != 'undefined',
          [styles.secondary]: secondary,
        })}
        {...{ href, id, onClick, target }}
      >
        {icon && (
          <span className={styles.linkIcon}>
            <Icon
              icon={icon}
              role={iconOnly ? 'img' : 'presentation'}
              title={iconOnly ? text : undefined}
            />
          </span>
        )}
        {text &&
          !(icon && iconOnly) && (
            <span className={styles.linkText}>{text}</span>
          )}
      </a>
    );
  };

  renderToolTipLink = () => (
    <Tooltip
      hideTooltip={false}
      tabIndex={null} // link inside takes focus instead
      tooltip={this.props.tooltip}
    >
      {this.renderLink()}
    </Tooltip>
  );

  render() {
    return this.props.tooltip ? this.renderToolTipLink() : this.renderLink();
  }
}

Link.displayName = 'Link';
Link.defaultProps = {
  iconOnly: false,
  active: false,
  secondary: false,
  target: '_self',
};

export default Link;
