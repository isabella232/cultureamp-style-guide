// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';

const Menu = (props: { children: React.Node }) => (
  <div className={styles.menuList}>{props.children}</div>
);

export default Menu;
