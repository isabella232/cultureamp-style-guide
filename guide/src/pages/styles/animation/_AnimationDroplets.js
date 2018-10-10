import React from 'react';
import Text from 'cultureamp-style-guide/components/Text';
import styles from './_AnimationDroplets.module.scss';

export default class AnimationDroplets extends React.Component {
  render() {
    return (
      <div className={styles.blue}>
        <Text tag="p">These are our animations!</Text>
      </div>
    );
  }
}
