// @flow
import React from 'react';
import classNames from 'classnames';

import styles from './Link.module.scss';
import Icon from '../../Icon';
import iconStyles from '../../Icon/Icon.module.scss';

type Props = {|
  icon: { id: string, viewBox: string },
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
  href,
  active,
  tooltip,
  hideTooltip,
  id,
  onClick,
}: Props) => {
  return (
    <div className={styles.root}>
      <a
        className={classNames(styles.link, { [iconStyles.active]: active })}
        {...{ href, id, onClick }}
      >
        <Icon icon={icon} title={tooltip} />
      </a>
      <div
        className={classNames(styles.tooltip, {
          [styles.suppressed]: hideTooltip,
        })}
        aria-hidden
      >
        <div>
          <small className={styles.content}>{tooltip}</small>
        </div>
      </div>
    </div>
  );
};

Link.defaultProps = {
  active: false,
  hideTooltip: false,
};

export default Link;
