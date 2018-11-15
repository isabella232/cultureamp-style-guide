// @flow
import * as React from 'react';
import classNames from 'classnames';
import Media from 'react-media';

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
import ControlledOffCanvas from '../OffCanvas';

type SupportedChild = React.Element<typeof Link> | React.Element<typeof Menu>;

type Props = {|
  environment: string,
  loading: boolean,
  colorScheme: 'cultureamp' | 'kaizen',
  badgeHref: string,
  footerComponent: ?React.Node,
  children: React.ChildrenArray<SupportedChild | false>,
|};

export default class NavigationBar extends React.Component<Props> {
  render() {
    const { environment, loading, children, colorScheme } = this.props;

    const links = [];
    const otherChildren = [];
    React.Children.toArray(children).forEach(child => {
      if (child === false) {
        return;
      }
      // Because react-hot-loader wraps the type, and uglify changes the type name,
      // we compare the displayName rather than comparing the type of name directly.
      if (child.type.displayName == Link.displayName) {
        links.push(((child: any): React.Element<typeof Link>));
      } else {
        otherChildren.push(child);
      }
    });

    return (
      <Media query="(min-width: 768px)">
        {matches =>
          matches ? (
            <header
              className={classNames(styles.navigationBar, styles[colorScheme])}
            >
              {this.renderBadge()}
              {this.renderLinks(links)}
              {this.renderOtherChildren(otherChildren)}
            </header>
          ) : (
            <ControlledOffCanvas
              headerComponent={this.renderBadge()}
              footerComponent={this.props.footerComponent}
              links={[...links, ...otherChildren]}
              heading="Menu"
            />
          )
        }
      </Media>
    );
  }

  renderBadge() {
    const { environment, loading, badgeHref } = this.props;

    const badges: {
      [key: string]: React.ComponentType<{|
        loading: boolean,
        href: string,
      |}>,
    } = {
      production: ProductionBadge,
      staging: StagingBadge,
      test: TestBadge,
      local: LocalBadge,
    };
    const Badge = badges[environment] || namedBadge(environment);
    return <Badge loading={loading} href={badgeHref} />;
  }

  renderLinks(links: React.Element<typeof Link>[]) {
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
                [styles.active]: link.props.active,
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

  static displayName = 'NavigationBar';
  static defaultProps = {
    environment: 'production',
    loading: false,
    colorScheme: 'cultureamp',
    badgeHref: '/',
  };

  static Link = Link;
  static Menu = Menu;
}
