// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon/Icon.js';
import styles from './Menu.module.scss';

const MenuItem = (props: {
  icon?: any,
  hoverIcon?: boolean,
  children: React.Node,
  action: string | (() => void),
}) => {
  const { icon, hoverIcon, children, action } = props;
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
    });
  return (
    <a href={href} onClick={handleOnClick} className={className}>
      {label}
      {iconNode}
    </a>
  );
};

export default MenuItem;
