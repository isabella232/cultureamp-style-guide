import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';

const Menu = ({ children }) => (
  <div className={styles.menuList}>{children}</div>
);

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Menu;
