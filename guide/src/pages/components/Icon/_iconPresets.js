import React from 'react';
import Icon from 'cultureamp-style-guide/components/Icon';
import configureIcon from 'cultureamp-style-guide/icons/configure.svg';

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
    node: <Icon icon={configureIcon} role="presentation" inheritSize />,
  },
];

export default iconPresets;
