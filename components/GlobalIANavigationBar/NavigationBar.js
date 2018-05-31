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

    const leftLinks = [];
    const rightLinks = [];
    const otherChildren = [];
    React.Children.toArray(children).forEach(child => {
      if (child === false) return;
      if (child.props.id == 'support-center-navigation-link')
        rightLinks.push(child);
      else if (child.type.name == Link.name) leftLinks.push(child);
      else otherChildren.push(child);
    });

    return (
      <header className={classNames(styles.navigationBar, styles[colorScheme])}>
        {this.renderBadge()}
        {this.renderLinks(leftLinks, rightLinks)}
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

  renderLinks(leftLinks: SupportedChild[], rightLinks: SupportedChild[]) {
    return (
      <nav className={styles.links}>
        <ul className={styles.linkList}>
          {leftLinks.map(link => (
            <li
              key={link.key}
              className={classNames(styles.child, styles.primaryLink, {
                [styles.square]: link.props.square,
              })}
            >
              {link}
            </li>
          ))}
          {rightLinks.map((link, index) => (
            <li
              key={link.key}
              className={classNames(styles.child, styles.secondaryLink, {
                [styles.square]: link.props.square,
                [styles.first]: index === 0,
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
          <div
            key={child.key}
            className={classNames(styles.child, styles.square)}
          >
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
