// @flow

import * as React from 'react';
import styles from './Header.module.scss';
import IconButton from 'cultureamp-style-guide/components/Button/IconButton';
import closeIcon from 'cultureamp-style-guide/icons/close.svg';

type Props = {|
  badgeCommponent: React.Element,
  onClose: MouseEvent => void,
  heading: string,
|};

const Header = ({ badgeComponent, onClose, heading }: Props) => (
  <div className={styles.root}>
    {badgeComponent}
    <span className={styles.heading}>{heading}</span>
    <IconButton icon={closeIcon} onClick={onClose} reversed />
  </div>
);

export default Header;
