import React from 'react';
import { Layout } from '@cultureamp/kaizen/components/GlobalIALayout';
import styles from './LayoutDemo.module.scss';

// Note: because of the `position: fixed` styling, we need to wrap the NavigationBar and insert some styles to make it position: relative.
const LayoutDemo = props => (
  <div className={styles.layoutWrapper}>
    <Layout {...props} />
  </div>
);

export default LayoutDemo;
