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
    <MenuHeader title="My Dropdown Menu" />
    <MenuItem action={() => alert('print!')} icon={print} hoverIcon={false}>
      Print (icon)
    </MenuItem>
    <MenuItem action={() => alert('print!')} icon={print} hoverIcon={true}>
      Print (hover icon)
    </MenuItem>
    <MenuItem action={() => alert('print!')}>Print (no icon)</MenuItem>
    <MenuSeparator />
    <MenuItem
      action="https://www.cultureamp.com/"
      icon={enso}
      hoverIcon={false}
    >
      Culture Amp (icon)
    </MenuItem>
    <MenuItem action="https://www.cultureamp.com/" icon={enso} hoverIcon={true}>
      Culture Amp (hover icon)
    </MenuItem>
    <MenuItem action="https://www.cultureamp.com/">
      Culture Amp (no icon)
    </MenuItem>
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
    name: 'Label and Icon',
    props: { label: 'Print', icon: print, children: menuList },
  },
  {
    name: 'Text Only',
    props: { label: 'Print', children: menuList },
  },
];

export default presets;
