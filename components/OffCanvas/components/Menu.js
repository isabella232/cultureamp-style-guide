import * as React from 'react';
import classNames from 'classnames';
import styles from './Menu.module.scss';

const Menu = ({ links }) => {
  const indexOfFirstSecondaryLink = links.findIndex(
    link => link.props.secondary
  );

  return (
    <nav className={styles.links}>
      <ul>
        {links.map((link, index) => (
          <li
            key={link.key}
            className={classNames(styles.child, {
              [styles.active]: link.props.active,
              [styles.secondary]: link.props.secondary,
              [styles.first]: index === indexOfFirstSecondaryLink,
            })}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
