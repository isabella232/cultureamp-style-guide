// @flow
import * as React from 'react';
import GenericButton from './components/GenericButton.js';
import type { IconButtonProps } from './components/GenericButton.js';
import type { IconType } from '../Icon/Icon.js';

IconButton.defaultProps = {
  form: false,
  primary: false,
  secondary: false,
  destructive: false,
  disabled: false,
  reversed: false,
};

export default function IconButton(props: IconButtonProps) {
  return <GenericButton iconButton={true} {...props} />;
}

IconButton.displayName = 'IconButton';
