// @flow
import PropTypes from 'prop-types';
import * as React from 'react';
import classNames from 'classnames';
import styles from './Dropdown.module.scss';
import Icon from '../Icon/Icon';
import dropdownIcon from '../../icons/ellipsis.svg';
import DropdownMenu from './DropdownMenu';

type DropdownState = {
  isMenuVisible: boolean,
};

type DropdownProps = {
  children: React.Node,
  menuVisible: boolean,
};

export default class Dropdown extends React.Component<
  DropdownProps,
  DropdownState
> {
  dropdownButton: ?HTMLButtonElement;

  constructor(props: DropdownProps) {
    super(props);
    this.state = {
      isMenuVisible: Boolean(props.menuVisible),
    };
  }

  toggleDropdownMenu = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const currentState = this.state.isMenuVisible;
    this.setState({
      isMenuVisible: !currentState,
    });
  };

  hideDropdownMenu = () => {
    this.setState({
      isMenuVisible: false,
    });
  };

  getPosition() {
    return this.dropdownButton
      ? this.dropdownButton.getBoundingClientRect()
      : null;
  }

  renderDropdownMenu() {
    return (
      <DropdownMenu
        hideDropdownMenu={this.hideDropdownMenu}
        position={this.getPosition()}
      >
        {this.props.children}
      </DropdownMenu>
    );
  }

  render() {
    const btnClass = classNames({
      [styles.isOpen]: this.state.isMenuVisible,
      [styles.dropdownIcon]: true,
    });
    return (
      <div className={styles.fieldDropdownIconInner}>
        <button
          className={btnClass}
          onClick={this.toggleDropdownMenu}
          onMouseDown={e => e.preventDefault()}
          ref={k => (this.dropdownButton = k)}
        >
          <Icon icon={dropdownIcon} role="img" title="Open menu" />
        </button>
        {this.state.isMenuVisible && this.renderDropdownMenu()}
      </div>
    );
  }
}
