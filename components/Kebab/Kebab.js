// @flow
import PropTypes from 'prop-types';
import * as React from 'react';
import classNames from 'classnames';
import styles from './Kebab.module.scss';
import Icon from '../Icon/Icon';
import kebabIcon from '../../icons/ellipsis.svg';
import KebabMenu from './KebabMenu';

type DropdownState = {
  isMenuVisible: boolean,
};

type DropdownProps = {
  children: React.Node,
  menuVisible: boolean,
};

export default class Kebab extends React.Component<
  DropdownProps,
  DropdownState
> {
  kebab: ?HTMLButtonElement;

  constructor(props: DropdownProps) {
    super(props);
    this.state = {
      isMenuVisible: Boolean(props.menuVisible),
    };
  }

  toggleKebabMenu = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const currentState = this.state.isMenuVisible;
    this.setState({
      isMenuVisible: !currentState,
    });
  };

  hideKebabMenu = () => {
    this.setState({
      isMenuVisible: false,
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
      [styles.isOpen]: this.state.isMenuVisible,
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
        {this.state.isMenuVisible && this.renderKebabMenu()}
      </div>
    );
  }
}
