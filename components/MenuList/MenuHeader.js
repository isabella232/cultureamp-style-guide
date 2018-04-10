// @flow
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';

const MenuHeader = (props: { title: string, subtitle: string }) => (
  <div className={styles.header}>
    <span className={styles.header__title}>{props.title}</span>
    <span className={styles.header__subtitle}>{props.subtitle}</span>
  </div>
);

MenuHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default MenuHeader;
