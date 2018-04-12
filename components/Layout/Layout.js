// @flow
import * as React from 'react';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: React.Node,
};

function extractChildOfType(children, type) {
  const match = children.find(child => child && child.type.name == type.name);
  if (match) {
    const index = children.indexOf(match);
    children.splice(index, 1);
  }
  return match;
}

class Layout extends React.Component<LayoutProps> {
  render() {
    const content = React.Children.toArray(this.props.children);
    const navbar = extractChildOfType(content, NavigationBar);
    const header = extractChildOfType(content, Header);
    const sidebar = extractChildOfType(content, Sidebar);
    const footer = extractChildOfType(content, Footer);

    return (
      <div className={styles.root}>
        {navbar}
        <div className={styles.page}>
          {header}
          <div className={styles.body}>
            {sidebar}
            <main className={styles.content}>{content}</main>
          </div>
          {footer}
        </div>
      </div>
    );
  }

  static NavigationBar = NavigationBar;
  static Sidebar = Sidebar;
  static Header = Header;
  static Footer = Footer;
}

function NavigationBar(props: { children: React.Node }) {
  return <div className={styles.navigationBar}>{props.children}</div>;
}

function Sidebar(props: { children: React.Node }) {
  return <div className={styles.sidebar}>{props.children}</div>;
}

function Header(props: { children: React.Node }) {
  return <aside className={styles.header}>{props.children}</aside>;
}

function Footer(props: { children: React.Node }) {
  return <footer className={styles.footer}>{props.children}</footer>;
}

export default Layout;
