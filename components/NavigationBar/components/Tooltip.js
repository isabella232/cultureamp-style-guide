// @flow
import * as React from 'react';
import classNames from 'classnames';

import styles from './Tooltip.module.scss';

type Props = {|
  children?: React.Node,
  tabIndex: number | null,
  tooltip: string,
  hideTooltip: boolean,
  onMenuChange?: (open: boolean) => void,
|};

const Tooltip = ({ children, tabIndex, tooltip, hideTooltip }: Props) => {
  return (
    <div className={styles.root} tabIndex={tabIndex}>
      {children}
      <div
        className={classNames(styles.tooltip, {
          [styles.suppressed]: hideTooltip,
        })}
        aria-hidden // tooltips are hidden from screen readers! Use aria-label/aria-labelled-by on children
      >
        <div>
          <small className={styles.content}>{tooltip}</small>
        </div>
      </div>
    </div>
  );
};

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
  hideTooltip: false,
  tabIndex: 0,
};

export default Tooltip;
