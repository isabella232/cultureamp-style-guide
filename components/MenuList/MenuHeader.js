import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';

const MenuHeader = ({ title, subtitle }) => (
  <div className={styles.header}>
    <span className={styles.header__title}>{title}</span>
    <span className={styles.header__subtitle}>{subtitle}</span>
  </div>
);

MenuHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default MenuHeader;
