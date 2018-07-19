// @flow
import * as React from 'react';
import classNames from 'classnames';

import styles from './NavigationBar.module.scss';
import {
  ProductionBadge,
  StagingBadge,
  TestBadge,
  LocalBadge,
  namedBadge,
} from './components/Badge.js';
import Link from './components/Link.js';
import Menu from './components/Menu.js';
import Tooltip from './components/Tooltip.js';

type SupportedChild =
  | React.Element<typeof Link>
  | React.Element<typeof Menu>
  | React.Element<typeof Tooltip>;

type Props = {|
  environment: string,
  loading: boolean,
  colorScheme: 'cultureamp' | 'kaizen',
  children: React.ChildrenArray<SupportedChild | false>,
|};

type State = {|
  menusOpen: number,
|};

export default class NavigationBar extends React.Component<Props, State> {
  render() {
    const { environment, loading, children, colorScheme } = this.props;

    const links = [];
    const otherChildren = [];
    React.Children.toArray(children).forEach(child => {
      if (child === false) return;
      if (child.type.name == Link.name) links.push(child);
      else otherChildren.push(child);
    });

    return (
      <header className={classNames(styles.navigationBar, styles[colorScheme])}>
        {this.renderBadge()}
        {this.renderLinks(links)}
        {this.renderOtherChildren(otherChildren)}
      </header>
    );
  }

  renderBadge() {
    const { environment, loading } = this.props;

    const badges: {
      [key: string]: React.ComponentType<{| loading: boolean |}>,
    } = {
      production: ProductionBadge,
      staging: StagingBadge,
      test: TestBadge,
      local: LocalBadge,
    };
    const Badge = badges[environment] || namedBadge(environment);
    return <Badge loading={loading} />;
  }

  renderLinks(links: SupportedChild[]) {
    return (
      <nav className={styles.links}>
        <ul className={styles.linkList}>
          {links.map(link => (
            <li key={link.key} className={styles.child}>
              <div>
                {React.cloneElement(link, {
                  hideTooltip: this.state.menusOpen > 0,
                })}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  renderOtherChildren(otherChildren: SupportedChild[]) {
    return otherChildren.map(child => (
      <div key={child.key} className={styles.child}>
        <div>
          {React.cloneElement(child, {
            hideTooltip: this.state.menusOpen > 0,
            onMenuChange: this.menuChange,
          })}
        </div>
      </div>
    ));
  }

  menuChange = (open: boolean) => {
    this.setState(state => ({
      ...state,
      menusOpen: state.menusOpen + (open ? 1 : -1),
    }));
  };

  static displayName = 'NavigationBar';

  static defaultProps = {
    environment: 'production',
    loading: false,
    colorScheme: 'cultureamp',
  };

  state = { menusOpen: 0 };

  static Link = Link;
  static Menu = Menu;
  static Tooltip = Tooltip;
}
