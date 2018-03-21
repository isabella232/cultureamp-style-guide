import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from 'components/card';
import styles from './_IconsPage.module.scss';
import Icon from 'cultureamp-style-guide/components/Icon/Icon.js';
import iconStyles from 'cultureamp-style-guide/components/Icon/Icon.module.scss';
import enso from 'cultureamp-style-guide/icons/ca-monogram.svg';

class InteractionStates extends React.Component {
  render() {
    return (
      <Card dark={this.props.dark}>
        <div className={styles.cardWrapper}>
          {this.renderIcon('Disabled', iconStyles.disabled, 30)}
          {this.renderIcon('Inactive', null, 50)}
          {this.renderIcon('Hover', iconStyles.hover, 70)}
          {this.renderIcon('Active', iconStyles.active, 100)}
        </div>
      </Card>
    );
  }

  renderIcon(title, interactionStateClass, opacity) {
    return (
      <div
        className={classNames(
          styles.iconExample,
          iconStyles.interactiveIconWrapper,
          interactionStateClass
        )}
      >
        <strong>{title}</strong>
        <span>
          <Icon icon={enso} role="presentation" />
        </span>
        <span>{opacity} %</span>
      </div>
    );
  }
}

InteractionStates.propTypes = {
  dark: PropTypes.bool.isRequired,
};

export default InteractionStates;
