// @flow
import configureIcon from 'cultureamp-style-guide/icons/configure.svg';
import trashIcon from 'cultureamp-style-guide/icons/trash.svg';
import searchIcon from 'cultureamp-style-guide/icons/search-white.svg';
import logoutIcon from 'cultureamp-style-guide/icons/log-out.svg';
import IconButton from 'cultureamp-style-guide/components/Button/IconButton.js';
import React from 'react';

const buttonPresets = [
  {
    name: 'Default',
    node: (
      <IconButton
        icon={configureIcon}
        label="Label"
        automationId="demo-button"
      />
    ),
  },
  {
    name: 'Hyperlink',
    node: <IconButton icon={searchIcon} label="Label" href="//example.com" />,
  },
  {
    name: 'Hyperlink w/ onClick',
    node: (
      <IconButton
        icon={searchIcon}
        label="Label"
        href="//example.com"
        onClick={e => {
          alert('click!');
        }}
      />
    ),
  },
  {
    name: 'Disabled',
    node: <IconButton icon={configureIcon} label="Label" disabled />,
  },
  {
    name: 'Form',
    node: <IconButton icon={configureIcon} label="Label" form />,
  },
  {
    name: 'Destructive',
    node: <IconButton icon={trashIcon} label="Label" destructive />,
  },
  {
    name: 'Destructive Disabled',
    node: <IconButton icon={trashIcon} label="Label" destructive disabled />,
  },
  {
    name: 'Reversed',
    node: <IconButton icon={logoutIcon} label="Label" reversed />,
    darkBackground: true,
  },
  {
    name: 'Reversed Disabled',
    node: <IconButton icon={logoutIcon} label="Label" reversed disabled />,
    darkBackground: true,
  },
];

export default buttonPresets;
