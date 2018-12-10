// @flow
import * as React from 'react';
import classNames from 'classnames';
import styles from './OffCanvas.module.scss';
import Header from './components/Header';
import Menu from './components/Menu';
import IconButton from '../Button/IconButton';
import hamburgerIcon from 'cultureamp-style-guide/icons/hamburger.svg';
import Link from '../GlobalIANavigationBar/components/Link';

type Props = {|
  links: Array<Link>,
  heading: string,
  headerComponent: React.Node,
  footerComponent: ?React.Node,
  menuId: string,
|};

type State = {|
  visibleMenus: Array<string>,
|};

export const OffCanvasContext = React.createContext({
  visibleMenus: [],
  toggleVisibleMenu: menuId => {},
  resetVisibleMenus: () => {},
});

export class OffCanvas extends React.Component<Props> {
  static defaultProps = {
    links: [],
    withTrigger: false,
  };

  render() {
    return (
      <OffCanvasContext.Consumer>
        {({ visibleMenus, resetVisibleMenus }) => (
          <div
            className={classNames(styles.root, {
              [styles.active]: visibleMenus.includes(this.props.menuId),
            })}
          >
            <Header
              onClose={resetVisibleMenus}
              leftComponent={this.props.headerComponent}
              heading={this.props.heading}
            />
            <Menu links={this.props.links} />
            {this.props.footerComponent}
          </div>
        )}
      </OffCanvasContext.Consumer>
    );
  }
}

function withContextProvider(Component: React.ComponentType<*>) {
  return class OffCanvasWithContextProvider extends React.Component<
    Props,
    State
  > {
    state = {
      visibleMenus: [],
    };

    toggleMenu = (menuId: string) =>
      this.setState({
        visibleMenus: this.state.visibleMenus.includes(menuId)
          ? this.state.visibleMenus.filter(item => item !== menuId)
          : [...this.state.visibleMenus, menuId],
      });

    resetMenu = () => this.setState({ visibleMenus: [] });

    render() {
      return (
        <OffCanvasContext.Provider
          value={{
            ...this.state,
            toggleVisibleMenu: this.toggleMenu,
            resetVisibleMenus: this.resetMenu,
          }}
        >
          <Component {...this.props} />
        </OffCanvasContext.Provider>
      );
    }
  };
}

function withTrigger(Component: React.ComponentType<*>) {
  return class OffCanvasWithTrigger extends React.Component<Props> {
    render() {
      return (
        <OffCanvasContext.Consumer>
          {({ toggleVisibleMenu }) => (
            <React.Fragment>
              <button
                className={styles.trigger}
                onClick={() => toggleVisibleMenu(this.props.menuId)}
              >
                <span className={styles.hamburger} />
              </button>
              <Component {...this.props} />
            </React.Fragment>
          )}
        </OffCanvasContext.Consumer>
      );
    }
  };
}

export default withContextProvider(withTrigger(OffCanvas));
