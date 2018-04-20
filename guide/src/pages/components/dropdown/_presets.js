import {
  MenuList,
  MenuHeader,
  MenuItem,
  MenuSeparator,
} from 'cultureamp-style-guide/components/MenuList';
import meatballs from 'cultureamp-style-guide/icons/meatballs.svg';
import kebab from 'cultureamp-style-guide/icons/kebab.svg';
import print from 'cultureamp-style-guide/icons/print-white.svg';
import enso from 'cultureamp-style-guide/icons/ca-monogram.svg';
import React from 'react';

const menuList = (
  <MenuList>
    <MenuHeader title="Contextual Select Menu" />
    <MenuItem action={() => alert('print!')} icon={print} hoverIcon={false}>
      Action label with icon
    </MenuItem>
    <MenuItem action={() => alert('print!')} icon={print} hoverIcon={true}>
      Action label with hover icon
    </MenuItem>
    <MenuItem action={() => alert('print!')}>Action label</MenuItem>
    <MenuSeparator />
    <MenuItem
      action="https://www.cultureamp.com/"
      icon={enso}
      hoverIcon={false}
    >
      Link label with icon
    </MenuItem>
    <MenuItem action="https://www.cultureamp.com/" icon={enso} hoverIcon={true}>
      Link label with hover icon
    </MenuItem>
    <MenuItem action="https://www.cultureamp.com/">Link label</MenuItem>
  </MenuList>
);

const presets = [
  {
    name: 'Default (Meatball)',
    props: { children: menuList },
  },
  {
    name: 'Kebab',
    props: { icon: kebab, children: menuList },
  },
  {
    name: 'Label and icon',
    props: { label: 'Print', icon: print, children: menuList },
  },
  {
    name: 'Text only',
    props: { label: 'Print', children: menuList },
  },
  {
    name: 'Control action',
    props: {
      label: 'Print',
      controlAction: true,
      icon: print,
      children: menuList,
    },
  },
];

export default presets;
