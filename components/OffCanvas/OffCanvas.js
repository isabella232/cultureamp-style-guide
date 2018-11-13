// @flow
import * as React from 'react';
import classNames from 'classnames';
import styles from './OffCanvas.module.scss';
import Header from './components/Header';
import Menu from './components/Menu';
import IconButton from 'cultureamp-style-guide/components/Button/IconButton';
import hamburgerIcon from 'cultureamp-style-guide/icons/hamburger.svg';

type MenuType = 'Menu' | 'Settings';

type State = {|
  menuVisible: boolean,
  badgeComponent: React.Element,
  currentMenu: MenuType,
|};

export default class OffCanvas extends React.Component<Props, State> {
  state = {
    menuVisible: false,
    currentMenu: 'Menu',
  };

  toggleMenu = () => this.setState({ menuVisible: !this.state.menuVisible });

  render() {
    return (
      <React.Fragment>
        <div className={styles.trigger}>
          <IconButton icon={hamburgerIcon} onClick={this.toggleMenu} />
        </div>
        <div
          className={classNames(styles.root, {
            [styles.active]: this.state.menuVisible,
          })}
        >
          <Header
            onClose={this.toggleMenu}
            badgeComponent={this.props.badgeComponent}
            heading={this.state.currentMenu}
          />
          <Menu links={this.props.links} />
        </div>
      </React.Fragment>
    );
  }
}
