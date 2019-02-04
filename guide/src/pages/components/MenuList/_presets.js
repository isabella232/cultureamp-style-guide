// @flow
import {
  MenuList,
  MenuHeader,
  MenuItem,
  MenuSeparator,
} from '@cultureamp/kaizen/components/MenuList';
import print from '@cultureamp/kaizen/icons/print-white.svg';
import trash from '@cultureamp/kaizen/icons/trash.svg';
import enso from '@cultureamp/kaizen/icons/ca-monogram.svg';
import React from 'react';

const heading = <MenuHeader title="Contextual Select Menu" />;
const actions = [
  <MenuItem
    key={1}
    action={() => alert('Print!')}
    icon={print}
    hoverIcon={false}
  >
    Action label with icon
  </MenuItem>,
  <MenuItem
    key={2}
    action={() => alert('Print!')}
    icon={print}
    hoverIcon={true}
  >
    Action label with hover icon
  </MenuItem>,
  <MenuItem key={3} action={() => alert('Print!')}>
    Action label
  </MenuItem>,
];
const links = [
  <MenuItem
    key={1}
    action="https://www.cultureamp.com/"
    icon={enso}
    hoverIcon={false}
  >
    Link label with icon
  </MenuItem>,
  <MenuItem
    key={2}
    action="https://www.cultureamp.com/"
    icon={enso}
    hoverIcon={true}
  >
    Link label with hover icon
  </MenuItem>,
  <MenuItem key={3} action="https://www.cultureamp.com/">
    Link label
  </MenuItem>,
];
const destructiveActions = [
  <MenuItem
    key={1}
    action={() => alert('Delete!')}
    icon={trash}
    hoverIcon={false}
    destructive
  >
    Destructive Action label with icon
  </MenuItem>,
  <MenuItem
    key={2}
    action={() => alert('Delete!')}
    icon={trash}
    hoverIcon={true}
    destructive
  >
    Destructive Action label with hover icon
  </MenuItem>,
  <MenuItem key={3} action={() => alert('Delete!')} destructive>
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
    node: (
      <MenuList>
        {heading}
        {actions}
        {separator}
        {links}
        {separator}
        {destructiveActions}
      </MenuList>
    ),
  },
  {
    name: 'Simple list',
    node: (
      <MenuList>
        {activeState}
        {actions}
      </MenuList>
    ),
    props: { children: [activeState, ...actions] },
  },
];

export default presets;
