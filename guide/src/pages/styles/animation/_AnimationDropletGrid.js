import React from 'react';
import classnames from 'classnames';
import styles from './_AnimationDropletGrid.module.scss';

class AnimationDropletGrid extends React.PureComponent {
  render() {
    const { children } = this.props;

    return <div className={styles.grid}>{children}</div>;
  }
}

export default AnimationDropletGrid;
