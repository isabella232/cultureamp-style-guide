// @flow
import * as React from 'react';
import classNames from 'classnames';
import styles from './OffCanvas.module.scss';
import Header from './components/Header';
import Menu from './components/Menu';
import IconButton from 'cultureamp-style-guide/components/Button/IconButton';
import hamburgerIcon from 'cultureamp-style-guide/icons/hamburger.svg';
import Link from 'cultureamp-style-guide/components/GlobalIANavigationBar/components/Link';

type Props = {|
  links: Array<Link>,
  heading: string,
  menuVisible: boolean,
  headerComponent: React.Node,
  footerComponent: ?React.Node,
  toggleMenu: MouseEvent => void,
|};

type State = {|
  menuVisible: boolean,
|};

export class OffCanvas extends React.Component<Props> {
  static defaultProps = {
    links: [],
    withTrigger: false,
  };

  render() {
    return (
      <div
        className={classNames(styles.root, {
          [styles.active]: this.props.menuVisible,
        })}
      >
        <Header
          onClose={this.props.toggleMenu}
          leftComponent={this.props.headerComponent}
          heading={this.props.heading}
        />
        <Menu links={this.props.links} />
        {this.props.footerComponent}
      </div>
    );
  }
}

export function withTrigger(Component: React.ComponentType<*>) {
  return class ControlledOffCanvas extends React.Component<*, State> {
    state = {
      menuVisible: false,
    };

    toggleMenu = () => this.setState({ menuVisible: !this.state.menuVisible });

    render() {
      return (
        <React.Fragment>
          <div className={styles.trigger}>
            <IconButton icon={hamburgerIcon} onClick={this.toggleMenu} />
          </div>
          <Component
            menuVisible={this.state.menuVisible}
            toggleMenu={this.toggleMenu}
            {...this.props}
          />
        </React.Fragment>
      );
    }
  };
}

export default withTrigger(OffCanvas);
