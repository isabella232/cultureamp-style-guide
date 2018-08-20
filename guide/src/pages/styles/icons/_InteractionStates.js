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
          {this.renderIcon(
            'Disabled',
            iconStyles.disabled,
            30,
            this.props.dark
          )}
          {this.renderIcon(
            'Inactive',
            null,
            this.props.dark ? 100 : 50,
            this.props.dark
          )}
          {this.renderIcon('Hover', iconStyles.hover, 70, this.props.dark)}
          {this.renderIcon(
            'Active',
            iconStyles.active,
            this.props.dark ? 50 : 100,
            this.props.dark
          )}
        </div>
      </Card>
    );
  }

  renderIcon(title, interactionStateClass, opacity, dark) {
    return (
      <div
        className={classNames(styles.iconExample, interactionStateClass, {
          [iconStyles.reversedInteractiveIconWrapper]: dark,
          [iconStyles.interactiveIconWrapper]: !dark,
        })}
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
