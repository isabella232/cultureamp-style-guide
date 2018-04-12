import {
  MenuHeader,
  MenuItem,
  MenuSeparator,
} from 'cultureamp-style-guide/components/MenuList';
import print from 'cultureamp-style-guide/icons/print-white.svg';
import enso from 'cultureamp-style-guide/icons/ca-monogram.svg';
import React from 'react';

const children = [
  <MenuHeader title="My Dropdown Menu" subtitle="With a subtitle" />,
  <MenuItem action={() => alert('print!')} icon={print} hoverIcon={false}>
    Print (icon)
  </MenuItem>,
  <MenuItem action={() => alert('print!')} icon={print} hoverIcon={true}>
    Print (hover icon)
  </MenuItem>,
  <MenuItem action={() => alert('print!')}>Print (no icon)</MenuItem>,
  <MenuSeparator />,
  <MenuItem action="https://www.cultureamp.com/" icon={enso} hoverIcon={false}>
    Culture Amp (icon)
  </MenuItem>,
  <MenuItem action="https://www.cultureamp.com/" icon={enso} hoverIcon={true}>
    Culture Amp (hover icon)
  </MenuItem>,
  <MenuItem action="https://www.cultureamp.com/">
    Culture Amp (no icon)
  </MenuItem>,
];

const presets = [
  {
    name: 'Default',
    props: { children: children },
  },
];

export default presets;
