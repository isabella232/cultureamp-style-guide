// @flow
import { Dropdown } from '@cultureamp/kaizen/components/Dropdown';
import {
  MenuList,
  MenuHeader,
  MenuItem,
  MenuSeparator,
} from '@cultureamp/kaizen/components/MenuList';

import meatballs from '@cultureamp/kaizen/icons/meatballs.svg';
import kebab from '@cultureamp/kaizen/icons/kebab.svg';
import printWhite from '@cultureamp/kaizen/icons/print-white.svg';
import print from '@cultureamp/kaizen/icons/print.svg';
import enso from '@cultureamp/kaizen/icons/ca-monogram.svg';
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
    node: <Dropdown>{menuList}</Dropdown>,
  },
  {
    name: 'Kebab',
    node: <Dropdown icon={kebab}>{menuList}</Dropdown>,
  },
  {
    name: 'Label and icon',
    node: (
      <Dropdown label="Print" icon={kebab}>
        {menuList}
      </Dropdown>
    ),
  },
  {
    name: 'Text only',
    node: <Dropdown label="Print">{menuList}</Dropdown>,
  },
  {
    name: 'Control action',
    node: (
      <Dropdown label="Print" icon={kebab} controlAction={true}>
        {menuList}
      </Dropdown>
    ),
  },
  {
    name: 'Reversed Control action',
    node: (
      <Dropdown label="Print" icon={kebab} controlAction={true} reversedColor>
        {menuList}
      </Dropdown>
    ),
    darkBackground: true,
  },
];

export default presets;
