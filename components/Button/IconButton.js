// @flow
import * as React from 'react';
import GenericButton from './components/GenericButton.js';
import type { IconButtonProps } from './components/GenericButton.js';

IconButton.defaultProps = {
  form: false,
  destructive: false,
  disabled: false,
  reversed: false,
};

export default function IconButton(props: IconButtonProps) {
  return <GenericButton iconButton {...props} />;
}

IconButton.displayName = 'IconButton';
