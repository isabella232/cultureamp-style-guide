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
  tooltip: string,
  hideTooltip: boolean,
  id?: string,
  onClick?: (event: SyntheticMouseEvent<>) => void,
  onMenuChange?: boolean => void,
|};

const Link = ({
  icon,
  text,
  href,
  active,
  tooltip,
  hideTooltip,
  id,
  onClick,
}: Props) => {
  const textLink = <span className={styles.textLink}>{text}</span>;

  return (
    <div className={styles.root}>
      <a
        className={classNames(styles.link, {
          [iconStyles.active]: active,
          [styles.textLink]: !icon && text,
        })}
        {...{ href, id, onClick }}
      >
        {icon && <Icon icon={icon} title={tooltip} />}
        {icon && text && <span className={styles.separator} />}
        {text}
      </a>
    </div>
  );
};

Link.defaultProps = {
  active: false,
  hideTooltip: true,
};

export default Link;
