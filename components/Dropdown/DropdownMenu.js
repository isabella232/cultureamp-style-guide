// @flow
import PropTypes from 'prop-types';
import * as React from 'react';
import styles from './Dropdown.module.scss';

type DropdownMenuProps = {
  children: React.Node,
  hideDropdownMenu: () => void,
  position: ?{
    top: number,
    bottom: number,
    left: number,
    right: number,
  },
};

export default class DropdownMenu extends React.Component<DropdownMenuProps> {
  static displayName = 'DropdownMenu';
  menu: ?HTMLDivElement;

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    window.addEventListener('resize', this.handleDocumentResize, false);
    this.positionMenu();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
    window.removeEventListener('resize', this.handleDocumentResize, false);
  }

  positionMenu() {
    const menu = this.menu;
    
    if (!this.props.position || !menu) {
      return;
    }
    
    const pos = this.props.position;
    const heightBetweenTopOfRowAndDropdownIcon = (pos.bottom - pos.top) / 2;
    const { innerHeight } = window;
    const rect = menu.getBoundingClientRect();

    if (pos.bottom > innerHeight - rect.height) {
      menu.style.bottom = '24px';
      menu.style.top = 'auto';
    } else {
      menu.style.top = '24px';
      menu.style.bottom = 'auto';
    }
  }

  handleDocumentClick = (e: MouseEvent) => {
    if (
      this.menu &&
      e.target instanceof Node &&
      !this.menu.contains(e.target)
    ) {
      this.props.hideDropdownMenu();
    }
  };

  handleDocumentResize = () => {
    this.props.hideDropdownMenu();
  };

  render() {
    const props = this.props;
    return (
      <div
        className={styles.menuContainer}
        ref={m => (this.menu = m)}
        onClick={() => props.hideDropdownMenu()}
      >
        {props.children}
      </div>
    );
  }
}
