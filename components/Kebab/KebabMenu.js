// @flow
import PropTypes from 'prop-types';
import * as React from 'react';
import styles from './Kebab.module.scss';

type KebabMenuProps = {
  children: React.Node,
  hideKebabMenu: () => void,
  position: ?{
    top: number,
    bottom: number,
    left: number,
    right: number,
  },
};

export default class KebabMenu extends React.Component<KebabMenuProps> {
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
    const heightBetweenTopOfRowAndKebabIcon = (pos.bottom - pos.top) / 2;
    const { innerHeight } = window;
    const rect = menu.getBoundingClientRect();
    if (pos.bottom > innerHeight - rect.height) {
      menu.style.bottom = '20px';
      menu.style.top = 'auto';
    } else {
      menu.style.top = '20px';
      menu.style.bottom = 'auto';
    }
    menu.style.right = '0px';
  }

  handleDocumentClick = (e: MouseEvent) => {
    if (
      this.menu &&
      e.target instanceof Node &&
      !this.menu.contains(e.target)
    ) {
      this.props.hideKebabMenu();
    }
  };

  handleDocumentResize = () => {
    this.props.hideKebabMenu();
  };

  render() {
    const props = this.props;
    return (
      <div
        className={styles.menuContainer}
        ref={m => (this.menu = m)}
        onClick={() => props.hideKebabMenu()}
      >
        {props.children}
      </div>
    );
  }
}
