import React from 'react';
import NavigationBar from 'cultureamp-style-guide/components/GlobalIANavigationBar';
import styles from './_NavigationBarDemo.module.scss';

// Note: because of the `position: fixed` styling, we need to wrap the NavigationBar and insert some styles to make it position: static.
const NavigationBarDemo = props => (
  <div className={styles.navWrapper}>
    <NavigationBar {...props} />
  </div>
);

export default NavigationBarDemo;
