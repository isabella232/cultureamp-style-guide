// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon/Icon.js';
import styles from './Menu.module.scss';

const MenuItem = (props: {
  icon?: any,
  hoverIcon?: boolean,
  active?: boolean,
  destructive?: boolean,
  children: React.Node,
  action: string | ((e: Event) => void),
  automationId?: string,
}) => {
  const {
    icon,
    hoverIcon,
    children,
    action,
    active,
    destructive,
    automationId,
  } = props;
  const isLink = typeof action === 'string',
    label = (
      <span className={styles.menuItem__Label}>
        {children}
        {isLink && '…'}
      </span>
    ),
    iconNode = icon && (
      <span className={styles.menuItem__Icon}>
        <Icon icon={icon} role="presentation" />
      </span>
    ),
    href = isLink ? action : null,
    handleOnClick = isLink ? null : action,
    className = classNames({
      [styles.menuItem]: true,
      [styles.hoverIcon]: icon && hoverIcon,
      [styles['menuItem--active']]: active,
      [styles['menuItem--destructive']]: destructive,
    });
  return (
    <a
      href={href}
      onClick={handleOnClick}
      className={className}
      data-automation-id={automationId}
    >
      {label}
      {iconNode}
    </a>
  );
};

export default MenuItem;
