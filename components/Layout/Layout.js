// @flow
import * as React from 'react';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: React.Node,
};

class Layout extends React.Component<LayoutProps> {
  render() {
    let content = [];
    let navbar = null;
    let header = null;
    let sidebar = null;
    let footer = null;

    React.Children.toArray(this.props.children).forEach(child => {
      if (!child) return;
      if (child.type.name == NavigationBar.name) {
        navbar = child;
      } else if (child.type.name == Header.name) {
        header = child;
      } else if (child.type.name == Sidebar.name) {
        sidebar = child;
      } else if (child.type.name == Footer.name) {
        footer = child;
      } else {
        content.push(child);
      }
    });

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
