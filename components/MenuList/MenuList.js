// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';

const MenuList = (props: { children: React.Node }) => (
  <div className={styles.menuList}>{props.children}</div>
);
MenuList.displayName = 'MenuList';

export default MenuList;
