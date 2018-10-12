import React from 'react';
import classNames from 'classnames';
import styles from './Card.module.scss';

const Card = ({ children, dark, className }) => {
  const classes = classNames(
    {
      [styles.card]: true,
      [styles.dark]: dark,
    },
    className
  );
  return <div className={classes}>{children}</div>;
};

export default Card;
