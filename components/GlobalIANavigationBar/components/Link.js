// @flow
import React from 'react';
import classNames from 'classnames';

import styles from './Link.module.scss';
import Icon from '../../Icon';
import iconStyles from '../../Icon/Icon.module.scss';

import type { SvgAsset } from '../../Icon/Icon.js';

type Props = {|
  icon?: SvgAsset,
  text: string,
  iconOnly: boolean,
  href: string,
  active: boolean,
  id?: string,
  secondary: boolean,
  onClick?: (event: SyntheticMouseEvent<>) => void,
|};

const Link = ({
  icon,
  text,
  href,
  active,
  id,
  onClick,
  secondary,
  iconOnly,
}: Props) => {
  return (
    <a
      className={classNames(styles.link, {
        [iconStyles.active]: active,
        [styles.containsText]: typeof text != 'undefined',
        [styles.secondary]: secondary,
      })}
      {...{ href, id, onClick }}
    >
      {icon && (
        <span className={styles.linkIcon}>
          <Icon
            icon={icon}
            role={iconOnly ? 'img' : 'presentation'}
            title={iconOnly && text}
          />
        </span>
      )}
      {text &&
        !(icon && iconOnly) && <span className={styles.linkText}>{text}</span>}
    </a>
  );
};

Link.displayName = 'Link';
Link.defaultProps = {
  iconOnly: false,
  active: false,
  secondary: false,
};

export default Link;
