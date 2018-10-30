// @flow
import PropTypes from 'prop-types';
import * as React from 'react';
import classNames from 'classnames';
import styles from './Dropdown.module.scss';
import Icon from '../Icon/Icon';
import defaultIcon from '../../icons/ellipsis.svg';
import chevronDown from '../../icons/chevron-down.svg';
import DropdownMenu from './DropdownMenu';
import type { SvgAsset } from '../Icon/Icon.js';

type DropdownState = {
  isMenuVisible: boolean,
};

type DropdownProps = {
  icon?: SvgAsset,
  label?: React.Node,
  children: React.Node,
  menuVisible?: boolean,
  controlAction?: boolean,
  automationId?: string,
  iconPosition?: 'start' | 'end',
};

export default class Dropdown extends React.Component<
  DropdownProps,
  DropdownState
> {
  static displayName = 'Dropdown';
  dropdownButton: ?HTMLButtonElement;

  static defaultProps = {
    iconPosition: 'start',
  };

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

  renderIcon = (icon: ?SvgAsset) => {
    if (!icon) return;

    return (
      <span className={styles.dropdownIcon}>
        <Icon icon={icon} role="img" title="Open menu" />
      </span>
    );
  };

  renderDownArrow = () => {
    const { label, controlAction } = this.props;
    if (!label || !controlAction) return;

    return (
      <span className={styles.chevronIcon}>
        <Icon icon={chevronDown} role="img" title="Open menu" />
      </span>
    );
  };

  renderButtonContent = () => {
    const { icon, label } = this.props;

    return (
      <React.Fragment>
        {this.renderIcon(icon)}
        {label && <span className={styles.dropdownLabel}>{label}</span>}
        {this.renderDownArrow()}
      </React.Fragment>
    );
  };

  renderReversedButtonContent = () => {
    const { icon, label } = this.props;

    return (
      <React.Fragment>
        {this.renderDownArrow()}
        {label && <span className={styles.dropdownLabel}>{label}</span>}
        {this.renderIcon(icon)}
      </React.Fragment>
    );
  };

  render() {
    let { icon, label, controlAction, automationId, iconPosition } = this.props;
    if (!icon && !label) {
      icon = defaultIcon;
    }
    const reverseIcon = iconPosition === 'end';
    const btnClass = classNames(styles.dropdownButton, {
      [styles.dropdownControlAction]: controlAction,
      [styles.isOpen]: this.state.isMenuVisible,
    });
    return (
      <div className={styles.dropdown}>
        <button
          className={btnClass}
          onClick={this.toggleDropdownMenu}
          onMouseDown={e => e.preventDefault()}
          ref={k => (this.dropdownButton = k)}
          data-automation-id={automationId}
        >
          {!reverseIcon && this.renderButtonContent()}
          {reverseIcon && this.renderReversedButtonContent()}
        </button>
        {this.state.isMenuVisible && this.renderDropdownMenu()}
      </div>
    );
  }
}
