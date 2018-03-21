import React from 'react';
import PropTypes from 'prop-types';
import allIcons from './_allIcons.js';
import IconTile from './_IconTile.js';
import styles from './_IconGrid.module.scss';

class IconGrid extends React.Component {
  render() {
    const { category } = this.props,
      icons = allIcons.find(section => section.category === category).icons;
    return (
      <div>
        <h2 className={styles.header}>{category}</h2>
        <div className={styles.iconGrid}>
          {icons.map(icon => <IconTile {...icon} key={icon.title} />)}
        </div>
      </div>
    );
  }
}

IconGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default IconGrid;
