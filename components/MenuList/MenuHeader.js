// @flow
import React from 'react';
import styles from './Menu.module.scss';

const MenuHeader = (props: { title: string, subtitle: string }) => (
  <div className={styles.header}>
    <span className={styles.header__title}>{props.title}</span>
    <span className={styles.header__subtitle}>{props.subtitle}</span>
  </div>
);

export default MenuHeader;
