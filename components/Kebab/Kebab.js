import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import styles from './Kebab.module.scss';
import Icon from 'cultureamp-style-guide/components/Icon/Icon';
import kebabIcon from 'cultureamp-style-guide/icons/ellipsis.svg';
import KebabMenu from './KebabMenu';

export default class Kebab extends React.Component {
  state = {
    isKebabMenuVisible: Boolean(this.props.menuVisible),
  };

  toggleKebabMenu = e => {
    e.stopPropagation();
    const currentState = this.state.isKebabMenuVisible;
    this.setState({
      isKebabMenuVisible: !currentState,
    });
  };

  hideKebabMenu = () => {
    this.setState({
      isKebabMenuVisible: false,
    });
  };

  getPosition() {
    return this.kebab ? this.kebab.getBoundingClientRect() : null;
  }

  renderKebabMenu() {
    return (
      <KebabMenu
        hideKebabMenu={this.hideKebabMenu}
        position={this.getPosition()}
      >
        {this.props.children}
      </KebabMenu>
    );
  }

  render() {
    const btnClass = classNames({
      [styles.isOpen]: this.state.isKebabMenuVisible,
      [styles.kebabIcon]: true,
    });
    return (
      <div className={styles.fieldKebabIconInner}>
        <button
          className={btnClass}
          onClick={this.toggleKebabMenu}
          onMouseDown={e => e.preventDefault()}
          ref={k => (this.kebab = k)}
        >
          <Icon icon={kebabIcon} role="img" title="Open menu" />
        </button>
        {this.state.isKebabMenuVisible && this.renderKebabMenu()}
      </div>
    );
  }
}

Kebab.propTypes = {
  children: PropTypes.node.isRequired,
  menuVisible: PropTypes.bool,
};
