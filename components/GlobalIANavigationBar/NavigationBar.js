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

type SupportedChild = React.Element<typeof Link> | React.Element<typeof Menu>;

type Props = {|
  environment: string,
  loading: boolean,
  colorScheme: 'cultureamp' | 'kaizen',
  children: React.ChildrenArray<SupportedChild | false>,
|};

export default class NavigationBar extends React.Component<Props> {
  render() {
    const { environment, loading, children, colorScheme } = this.props;

    const links = [];
    const otherChildren = [];
    React.Children.toArray(children).forEach(child => {
      if (child === false) return;
      else if (child.type.name == Link.name) links.push(child);
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
    const indexOfFirstSecondaryLink = links.findIndex(
      link => link.props.secondary
    );

    return (
      <nav className={styles.links}>
        <ul>
          {links.map((link, index) => (
            <li
              key={link.key}
              className={classNames(styles.child, {
                [styles.secondary]: link.props.secondary,
                [styles.first]: index === indexOfFirstSecondaryLink,
              })}
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  renderOtherChildren(otherChildren: SupportedChild[]) {
    return (
      <div className={styles.otherChildren}>
        {otherChildren.map(child => (
          <div key={child.key} className={styles.child}>
            {child}
          </div>
        ))}
      </div>
    );
  }

  static defaultProps = {
    environment: 'production',
    loading: false,
    colorScheme: 'cultureamp',
  };

  static Link = Link;
  static Menu = Menu;
}
