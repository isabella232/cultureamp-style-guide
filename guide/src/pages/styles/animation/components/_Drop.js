import React from 'react';
import classnames from 'classnames';
import styles from './_Drop.module.scss';

class Drop extends React.PureComponent {
  render() {
    const { color, classes, onClick, children } = this.props;

    return (
      <div className={styles.droplet}>
        <div className={styles.container} onClick={onClick}>
          <div
            className={classnames(classes, styles.hero)}
            style={{ background: color }}
          />
        </div>
        {children}
      </div>
    );
  }
}

export default Drop;
