import configureIcon from 'cultureamp-style-guide/icons/configure.svg';
import Button from 'cultureamp-style-guide/components/Button/Button.js';
import React from 'react';

const buttonPresets = [
  {
    name: 'Default',
    node: <Button label="Label" />,
  },
  {
    name: 'Hyperlink',
    node: <Button label="Label" href="//example.com" />,
  },
  {
    name: 'Hyperlink w/ onClick',
    node: (
      <Button
        label="Label"
        href="//example.com"
        onClick={e => e.preventDefault()}
      />
    ),
  },
  {
    name: 'Icon + Label',
    node: <Button label="Configure" icon={configureIcon} />,
  },
  {
    name: 'Label + Icon',
    node: <Button label="Configure" icon={configureIcon} iconPosition="end" />,
  },
  {
    name: 'Disabled',
    node: <Button label="Label" disabled />,
  },
  {
    name: 'Form',
    node: <Button label="Label" form />,
  },
  {
    name: 'Primary',
    node: <Button label="Label" primary />,
  },
  {
    name: 'Primary Disabled',
    node: <Button label="Label" primary disabled />,
  },
  {
    name: 'Destructive',
    node: <Button label="Label" destructive />,
  },
  {
    name: 'Destructive Disabled',
    node: <Button label="Label" destructive disabled />,
  },
  {
    name: 'Reversed',
    node: <Button label="Label" reversed />,
    darkBackground: true,
  },
  {
    name: 'Reversed Disabled',
    node: <Button label="Label" reversed disabled />,
    darkBackground: true,
  },
  {
    name: 'Primary Reversed',
    node: <Button label="Label" primary reversed reverseColor="ocean" />,
    darkBackground: true,
  },
  {
    name: 'Primary Reversed Disabled',
    node: <Button label="Label" primary reversed disabled />,
    darkBackground: true,
  },
];

export default buttonPresets;
