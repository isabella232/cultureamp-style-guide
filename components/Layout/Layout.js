// @flow
import * as React from 'react';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: React.Node,
};

class Layout extends React.Component<LayoutProps> {
  render() {
    const content = React.Children.toArray(this.props.children);
    const navbar = extractChildOfType(content, NavigationBar);
    const header = extractChildOfType(content, Header);
    const sidebar = extractChildOfType(content, Sidebar);
    const footer = extractChildOfType(content, Footer);
    const announcers = extractChildOfType(content, Announcers);
    const toasts = extractChildOfType(content, Toasts);

    return (
      <div className={styles.root}>
        {navbar}
        {announcers}
        <div className={styles.page}>
          {header}
          {toasts}
          <div className={styles.body}>
            <div className={styles.bodyInner}>
              {sidebar}
              <main className={styles.content}>{content}</main>
            </div>
          </div>
          {footer}
        </div>
      </div>
    );
  }

  static displayName = 'Layout';
  static NavigationBar = NavigationBar;
  static Sidebar = Sidebar;
  static Header = Header;
  static Footer = Footer;
  static Toasts = Toasts;
  static Announcers = Announcers;
}

function NavigationBar(props: { children: React.Node }) {
  return <div className={styles.navigationBar}>{props.children}</div>;
}
NavigationBar.displayName = 'NavigationBar';

function Sidebar(props: { children: React.Node }) {
  return <div className={styles.sidebar}>{props.children}</div>;
}
Sidebar.displayName = 'Sidebar';

function Header(props: { children: React.Node }) {
  return <aside className={styles.header}>{props.children}</aside>;
}
Header.displayName = 'Header';

function Footer(props: { children: React.Node }) {
  return <footer className={styles.footer}>{props.children}</footer>;
}
Footer.displayName = 'Footer';

/**
 * An area for toast notifications that will also trigger a screen-reader announcement.
 * Content is absolutely positioned in the top right, but it is up to you to add appropriately styled notifications.
 * By setting the children of `<Layout.Toasts>` the screen reader will immediately read its contents, without losing focus.
 * You can safely add and remove toasts without worrying about the screen reader announcement being interrupted or repeated.
 */
function Toasts(props: { children: React.Node }) {
  return (
    <div className={styles.toasts} aria-live="assertive">
      {props.children}
    </div>
  );
}
Toasts.displayName = 'Toasts';

/**
 * Announcements intended for screen readers only. Content will be invisible for sighted users.
 * By setting the children of `<Layout.Announcers>` the screen reader will immediately read its contents, without losing focus.
 * You can safely override the contents when adding a new announcement rather than appending the contents.
 */
function Announcers(props: { children: React.Node }) {
  return (
    <div className={styles.announcers} aria-live="assertive">
      {props.children}
    </div>
  );
}
Announcers.displayName = 'Announcers';

function extractChildOfType(children, type) {
  const match = children.find(
    child => child && child.type.displayName == type.displayName
  );
  if (match) {
    const index = children.indexOf(match);
    children.splice(index, 1);
  }
  return match;
}

export default Layout;
