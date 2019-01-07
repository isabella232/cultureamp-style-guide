// @flow
import * as React from 'react';
import GenericButton from './components/GenericButton.js';
import type { ButtonProps } from './components/GenericButton.js';

Button.defaultProps = {
  fullWidth: false,
  form: false,
  primary: false,
  secondary: false,
  destructive: false,
  disabled: false,
  reversed: false,
  iconPosition: 'start',
};

export default function Button(props: ButtonProps) {
  return <GenericButton {...props} />;
}

Button.displayName = 'Button';
