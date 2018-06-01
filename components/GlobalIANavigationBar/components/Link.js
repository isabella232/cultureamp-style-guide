// @flow
import React from 'react';
import classNames from 'classnames';

import styles from './Link.module.scss';
import Icon from '../../Icon';
import iconStyles from '../../Icon/Icon.module.scss';

type Props = {|
  icon?: { id: string, viewBox: string },
  text?: string,
  href: string,
  active: boolean,
  id?: string,
  square?: boolean,
  onClick?: (event: SyntheticMouseEvent<>) => void,
|};

const Link = ({ icon, text, href, active, id, onClick, square }: Props) => {
  return (
    <a
      className={classNames(styles.link, {
        [iconStyles.active]: active,
      })}
      {...{ href, id, onClick }}
    >
      {icon && (
        <span className={styles.linkIcon}>
          <Icon icon={icon} />
        </span>
      )}
      {text && <span className={styles.linkText}>{text}</span>}
    </a>
  );
};

Link.defaultProps = {
  active: false,
};

export default Link;
