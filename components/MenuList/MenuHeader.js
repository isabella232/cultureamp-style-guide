// @flow
import React from 'react';
import styles from './Menu.module.scss';

const MenuHeader = (props: { title: string }) => (
  <div className={styles.header}>
    <span className={styles.header__title}>{props.title}</span>
  </div>
);

export default MenuHeader;
