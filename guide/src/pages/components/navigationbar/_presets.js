import NavigationBar from 'cultureamp-style-guide/components/NavigationBar';
import Icon from 'cultureamp-style-guide/components/Icon';
import homeIcon from 'cultureamp-style-guide/icons/home.svg';
import caIcon from 'cultureamp-style-guide/icons/ca-monogram.svg';
import supportIcon from 'cultureamp-style-guide/icons/support.svg';
import NavigationBarDemo from './_NavigationBarDemo';
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
    node: (
      <NavigationBarDemo>
        {homeLink}
        {supportLink}
        {menu}
      </NavigationBarDemo>
    ),
  },
  {
    name: 'Loading',
    node: (
      <NavigationBarDemo loading>
        {homeLink}
        {supportLink}
        {menu}
      </NavigationBarDemo>
    ),
  },
  {
    name: 'Kaizen Colours',
    node: (
      <NavigationBarDemo colorScheme="kaizen">
        {homeLink}
        {menu}
      </NavigationBarDemo>
    ),
  },
  {
    name: 'Empty',
    node: <NavigationBarDemo />,
  },
];

export default presets;
