// @flow
import { NavigationBar } from '@cultureamp/kaizen/components/GlobalIANavigationBar';
import { Icon } from '@cultureamp/kaizen/components/Icon';
import homeIcon from '@cultureamp/kaizen/icons/home.svg';
import caIcon from '@cultureamp/kaizen/icons/ca-monogram.svg';
import supportIcon from '@cultureamp/kaizen/icons/support.svg';
import academyIcon from '@cultureamp/kaizen/icons/academy.svg';
import NavigationBarDemo from './_NavigationBarDemo';
import React from 'react';

const dashboardLink = <NavigationBar.Link text="Home" href="/" active={true} />;
const surveysLink = (
  <NavigationBar.Link text="Surveys" href="/" active={false} />
);
const supportLink = (
  <NavigationBar.Link
    icon={supportIcon}
    text="Support"
    href="http://academy.cultureamp.com/"
    active={false}
    secondary
  />
);
const academyLink = (
  <NavigationBar.Link
    icon={academyIcon}
    text="Academy"
    href="http://academy.cultureamp.com/"
    active={false}
    secondary
  />
);
const menu = (
  <NavigationBar.Menu
    heading="Menu"
    items={[
      {
        label: 'About Culture Amp',
        link: 'https://www.cultureamp.com/',
      },
      {
        label: 'Contribute to this guide',
        link:
          'https://github.com/cultureamp/cultureamp-style-guide/tree/master/guide',
        newWindow: true,
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
        {dashboardLink}
        {surveysLink}
        {supportLink}
        {academyLink}
        {menu}
      </NavigationBarDemo>
    ),
  },
  {
    name: 'Loading',
    node: (
      <NavigationBarDemo loading>
        {dashboardLink}
        {supportLink}
        {menu}
      </NavigationBarDemo>
    ),
  },
  {
    name: 'Kaizen Colours',
    node: (
      <NavigationBarDemo colorScheme="kaizen">
        {dashboardLink}
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
