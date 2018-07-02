// @flow
import * as React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

type Props = {|
  label: String,
|};

const Button = ({ label }: Props) => (
  <span className={styles.container}>
    <button className={styles.button}>
      <span className={styles.content}>
        <span className={styles.label}>{label}</span>
      </span>
    </button>
  </span>
);

export default Button;
