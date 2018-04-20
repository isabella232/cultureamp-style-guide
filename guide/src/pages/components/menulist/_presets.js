import {
  MenuHeader,
  MenuItem,
  MenuSeparator,
} from 'cultureamp-style-guide/components/MenuList';
import print from 'cultureamp-style-guide/icons/print-white.svg';
import trash from 'cultureamp-style-guide/icons/trash.svg';
import enso from 'cultureamp-style-guide/icons/ca-monogram.svg';
import React from 'react';

const heading = <MenuHeader title="Contextual Select Menu" />;
const actions = [
  <MenuItem action={() => alert('Print!')} icon={print} hoverIcon={false}>
    Action label with icon
  </MenuItem>,
  <MenuItem action={() => alert('Print!')} icon={print} hoverIcon={true}>
    Action label with hover icon
  </MenuItem>,
  <MenuItem action={() => alert('Print!')}>Action label</MenuItem>,
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
const destructiveActions = [
  <MenuItem
    action={() => alert('Delete!')}
    icon={trash}
    hoverIcon={false}
    destructive
  >
    Destructive Action label with icon
  </MenuItem>,
  <MenuItem
    action={() => alert('Delete!')}
    icon={trash}
    hoverIcon={true}
    destructive
  >
    Destructive Action label with hover icon
  </MenuItem>,
  <MenuItem action={() => alert('Delete!')} destructive>
    Destructive Action label
  </MenuItem>,
];
const activeState = (
  <MenuItem
    action={() => alert('I am active!')}
    icon={print}
    hoverIcon={false}
    active
  >
    Active action label with icon
  </MenuItem>
);
const separator = <MenuSeparator />;

const presets = [
  {
    name: 'Default',
    props: {
      children: [
        heading,
        ...actions,
        separator,
        ...links,
        separator,
        ...destructiveActions,
      ],
    },
  },
  {
    name: 'Simple list',
    props: { children: [activeState, ...actions] },
  },
];

export default presets;
