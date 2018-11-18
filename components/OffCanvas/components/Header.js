// @flow

import * as React from 'react';
import styles from './Header.module.scss';
import IconButton from '../../Button/IconButton';
import closeIcon from 'cultureamp-style-guide/icons/close.svg';

type Props = {|
  leftComponent: React.Node,
  onClose: MouseEvent => void,
  heading: string,
|};

const Header = ({ leftComponent, onClose, heading }: Props) => (
  <div className={styles.root}>
    {leftComponent}
    <span className={styles.heading}>{heading}</span>
    <IconButton label="Close" icon={closeIcon} onClick={onClose} reversed />
  </div>
);

export default Header;
