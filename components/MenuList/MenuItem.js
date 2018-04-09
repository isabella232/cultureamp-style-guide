import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'cultureamp-style-guide/components/Icon/Icon.js';
import styles from './Menu.module.scss';

const MenuItem = ({ icon, hoverIcon, children, action }) => {
  const isLink = typeof action === 'string',
    label = <span className={styles.menuItem__Label}>{children}</span>,
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

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  icon: PropTypes.object,
  hoverIcon: PropTypes.bool,
};

export default MenuItem;
