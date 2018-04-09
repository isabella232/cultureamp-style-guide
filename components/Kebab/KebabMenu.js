import PropTypes from 'prop-types';
import React from 'react';
import styles from './Kebab.module.scss';

export default class KebabMenu extends React.Component {
  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    window.addEventListener('resize', this.handleDocumentResize, false);
    this.positionMenu();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
    window.removeEventListener('resize', this.handleDocumentResize, false);
  }

  menuRef = c => {
    this.menu = c;
  };

  positionMenu() {
    if (!this.props.position) {
      return;
    }
    const pos = this.props.position;
    const heightBetweenTopOfRowAndKebabIcon = (pos.bottom - pos.top) / 2;
    const { innerHeight } = window;
    const rect = this.menu.getBoundingClientRect();
    if (pos.bottom > innerHeight - rect.height) {
      this.menu.style.bottom = '20px';
      this.menu.style.top = undefined;
    } else {
      this.menu.style.top = '20px';
      this.menu.style.bottom = undefined;
    }
    this.menu.style.right = '0px';
  }

  handleDocumentClick = e => {
    if (this.menu && !this.menu.contains(e.target)) {
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
        ref={this.menuRef}
        onClick={() => props.hideKebabMenu()}
      >
        {props.children}
      </div>
    );
  }
}

KebabMenu.propTypes = {
  children: PropTypes.node.isRequired,
  hideKebabMenu: PropTypes.func.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
  }),
};
