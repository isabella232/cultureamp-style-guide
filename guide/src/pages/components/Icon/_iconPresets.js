// @flow
import React from 'react';
import { Icon } from '@cultureamp/kaizen/components/Icon';
import configureIcon from '@cultureamp/kaizen/icons/configure.svg';

const iconPresets = [
  {
    name: 'Meaningful',
    node: <Icon icon={configureIcon} role="img" title="Warning" />,
  },
  {
    name: 'Presentational',
    node: <Icon icon={configureIcon} role="presentation" />,
  },
  {
    name: 'Inherit size',
    node: (
      <div style={{ width: '100%' }}>
        <Icon icon={configureIcon} role="presentation" inheritSize />
      </div>
    ),
  },
];

export default iconPresets;
