import NavigationBar from 'cultureamp-style-guide/components/NavigationBar';
import Icon from 'cultureamp-style-guide/components/Icon';
import homeIcon from 'cultureamp-style-guide/icons/home.svg';
import caIcon from 'cultureamp-style-guide/icons/ca-monogram.svg';
import supportIcon from 'cultureamp-style-guide/icons/support.svg';
import React from 'react';

const homeLink = (
  <NavigationBar.Link icon={homeIcon} href="/" tooltip="Home" active={true} />
);
const supportLink = (
  <NavigationBar.Link
    icon={supportIcon}
    href="http://academy.cultureamp.com/"
    tooltip="Support"
    active={false}
  />
);
const menu = (
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
);

const presets = [
  {
    name: 'Default',
    props: { children: [homeLink, supportLink, menu] },
  },
  {
    name: 'Loading',
    props: { loading: true, children: [homeLink, supportLink, menu] },
  },
  {
    name: 'Kaizen Colours',
    props: { colorScheme: 'kaizen', children: [homeLink, menu] },
  },
  {
    name: 'Empty',
    props: { children: [] },
  },
];

export default presets;
