// @flow
import configureIcon from 'cultureamp-style-guide/icons/configure.svg';
import Button from 'cultureamp-style-guide/components/Button/Button.js';
import React from 'react';

const buttonPresets = [
  {
    name: 'Default',
    node: <Button label="Label" automationId="demo-button" />,
  },
  {
    name: 'Full Width',
    node: <Button label="Label" automationId="demo-button" fullWidth />,
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
        onClick={e => {
          alert('click!');
        }}
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
    name: 'Overflowing text',
    node: (
      <div style={{ width: 220 }}>
        <Button
          icon={configureIcon}
          label="Passez au rapport de synthèse"
          automationId="demo-button"
        />
      </div>
    ),
  },
  {
    name: 'Disabled',
    node: <Button label="Label" disabled />,
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
    name: 'Secondary',
    node: <Button label="Label" secondary />,
  },
  {
    name: 'Secondary Disabled',
    node: <Button label="Label" secondary disabled />,
  },
  {
    name: 'Secondary w/ Icon',
    node: <Button label="Configure" icon={configureIcon} secondary />,
  },
  {
    name: 'Secondary Disabled w/ Icon',
    node: <Button label="Configure" icon={configureIcon} secondary disabled />,
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
  {
    name: 'Form',
    node: <Button label="Label" form />,
  },
  {
    name: 'Form (Overflowing text)',
    node: (
      <div style={{ width: 220 }}>
        <Button
          form
          icon={configureIcon}
          label="Passez au rapport de synthèse"
          automationId="demo-button"
        />
      </div>
    ),
  },
  {
    name: 'Form Primary',
    node: <Button primary label="Label" form />,
  },
  {
    name: 'Form Secondary',
    node: <Button secondary label="Label" form />,
  },
  {
    name: 'Form Reversed',
    node: <Button label="Label" reversed form />,
    darkBackground: true,
  },
  {
    name: 'Form Primary Reversed',
    node: <Button primary label="Label" reversed form />,
    darkBackground: true,
  },
  {
    name: 'Type Submit',
    node: <Button label="Label" type="submit" />,
  },
  {
    name: 'Type Reset',
    node: <Button label="Label" type="reset" />,
  },
];

export default buttonPresets;
