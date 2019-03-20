// @flow
import React from 'react';
import classNames from 'classnames';

import styles from './Link.module.scss';
import Icon from '../../Icon';
import type { SvgAsset } from '../../Icon/Icon.js';
import Tooltip from './Tooltip.js';
import chevronRightIcon from 'cultureamp-style-guide/icons/chevron-right.svg';

type Props = {|
  icon?: SvgAsset,
  text: string,
  iconOnly: boolean,
  href: string,
  active: boolean,
  id?: string,
  secondary: boolean,
  onClick?: (event: SyntheticMouseEvent<>) => void,
  tooltipText?: string,
  target: '_self' | '_blank',
  hasMenu?: boolean,
  bottomTooltip?: boolean,
|};

export default class Link extends React.PureComponent<Props> {
  static defaultProps = {
    iconOnly: false,
    active: false,
    secondary: false,
    target: '_self',
    bottomTooltip: false,
  };

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
      hasMenu,
    } = this.props;

    return (
      <a
        className={classNames(styles.link, {
          [styles.active]: active,
          [styles.containsText]: !!text,
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
        {hasMenu && (
          <span className={styles.menuIcon}>
            <Icon icon={chevronRightIcon} role="presentation" />
          </span>
        )}
      </a>
    );
  };

  render() {
    const { tooltipText, bottomTooltip, target } = this.props;

    return target === '_blank' ? (
      <Tooltip
        hideTooltip={false}
        tabIndex={null} // link inside takes focus instead
        tooltip={tooltipText ? tooltipText : 'Opens in a new tab'}
        bottomPosition={bottomTooltip}
      >
        {this.renderLink()}
      </Tooltip>
    ) : (
      this.renderLink()
    );
  }
}
