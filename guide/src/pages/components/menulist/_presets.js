import {
  MenuHeader,
  MenuItem,
  MenuSeparator,
} from 'cultureamp-style-guide/components/MenuList';
import print from 'cultureamp-style-guide/icons/print-white.svg';
import enso from 'cultureamp-style-guide/icons/ca-monogram.svg';
import React from 'react';

const heading = <MenuHeader title="Contextual Select Menu" />;
const actions = [
  <MenuItem action={() => alert('print!')} icon={print} hoverIcon={false}>
    Action label with icon
  </MenuItem>,
  <MenuItem action={() => alert('print!')} icon={print} hoverIcon={true}>
    Action label with hover icon
  </MenuItem>,
  <MenuItem action={() => alert('print!')}>Action label</MenuItem>,
];
const links = [
  <MenuItem action="https://www.cultureamp.com/" icon={enso} hoverIcon={false}>
    Link label with icon
  </MenuItem>,
  <MenuItem action="https://www.cultureamp.com/" icon={enso} hoverIcon={true}>
    Link label with hover icon
  </MenuItem>,
  <MenuItem action="https://www.cultureamp.com/">Link label</MenuItem>,
];
const separator = <MenuSeparator />;

const presets = [
  {
    name: 'Default',
    props: { children: [heading, ...actions, separator, ...links] },
  },
  {
    name: 'Simple list',
    props: { children: actions },
  },
];

export default presets;
