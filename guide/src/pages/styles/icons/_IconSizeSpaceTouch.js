import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/card';
import styles from './_IconsPage.module.scss';
import minimumSize from '!file-loader!./img/minimum-size.svg';
import spacing from '!file-loader!./img/spacing.svg';
import touchArea from '!file-loader!./img/touch-area.svg';
import neighbouringIcons from '!file-loader!./img/neighbouring-icons.svg';

class IconSizeSpaceTouch extends React.Component {
  render() {
    return (
      <Card>
        <div className={styles.cardWrapper}>
          <div className={styles.iconExample}>
            <strong>Minimum Size</strong>
            <img
              src={minimumSize}
              alt="Each icon should have a minimum width of 20px"
            />
          </div>
          <div className={styles.iconExample}>
            <strong>Spacing</strong>
            <img
              src={spacing}
              alt="Labels should sit 10px to the right of an icon"
            />
          </div>
          <div className={styles.iconExample}>
            <strong>Touch Area</strong>
            <img
              src={touchArea}
              alt="If an icon is clickable the clickable area should be at least a 48px square surrounding the icon"
            />
          </div>
          <div className={styles.iconExample}>
            <strong>Neighbouring Icons</strong>
            <img
              src={neighbouringIcons}
              alt="If two icons are side-by-side in a toolbar, they should each have a 48px touch area, resulting in 96px total width"
            />
          </div>
        </div>
      </Card>
    );
  }
}

IconSizeSpaceTouch.propTypes = {};

export default IconSizeSpaceTouch;
