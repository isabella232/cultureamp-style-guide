import React from 'react';
import Layout from 'cultureamp-style-guide/components/Layout';
import NavigationBar from 'cultureamp-style-guide/components/NavigationBar';
import Icon from 'cultureamp-style-guide/components/Icon';
import homeIcon from 'cultureamp-style-guide/icons/home.svg';
import caIcon from 'cultureamp-style-guide/icons/ca-monogram.svg';
import supportIcon from 'cultureamp-style-guide/icons/support.svg';
import styles from './LayoutDemo.module.scss';

const navBar = (
  <Layout.NavigationBar>
    <NavigationBar>
      <NavigationBar.Link
        icon={homeIcon}
        href="/"
        tooltip="Home"
        active={true}
      />
      <NavigationBar.Link
        icon={supportIcon}
        href="http://academy.cultureamp.com/"
        tooltip="Support"
        active={false}
      />
      <NavigationBar.Menu
        tooltip="Culture Amp"
        header={null}
        items={[
          {
            label: 'About Culture Amp',
            link: 'https://www.cultureamp.com/',
          },
        ]}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            color: '#F8A6AE',
            borderRadius: '3px',
          }}
        >
          <Icon
            icon={caIcon}
            role="img"
            title="Culture Amp Logo"
            inheritSize={true}
          />
        </div>
      </NavigationBar.Menu>
    </NavigationBar>
  </Layout.NavigationBar>
);

const sidebar = (
  <Layout.Sidebar>
    <div className={styles.sidebar}>
      <h2>Actions</h2>
      <p>Go here...</p>
      <h2>Filters</h2>
      <p>Go here...</p>
      <p>
        Note: Usually the navigation bar and sidebar will not scroll as the main
        page content scrolls, but we have disabled the fixed positioning for
        this demo.
      </p>
    </div>
  </Layout.Sidebar>
);

const content = (
  <div className={styles.content}>
    <h1>This is the main content</h1>
    <p>It will scroll with the main window</p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <p>While the sidebar and navbar should remain fixed.</p>
  </div>
);

const header = (
  <Layout.Header>
    <div className={styles.flash}>Welcome back!</div>
  </Layout.Header>
);

const footer = (
  <Layout.Footer>
    <div className={styles.footer}>&copy; 2018 Culture Amp</div>
  </Layout.Footer>
);

const presets = [
  {
    name: 'With sidebar',
    props: { children: [navBar, sidebar, content] },
  },
  {
    name: 'Without sidebar',
    props: { children: [navBar, content] },
  },
  {
    name: 'With footer and header',
    props: { children: [header, navBar, sidebar, content, footer] },
  },
];

export default presets;
