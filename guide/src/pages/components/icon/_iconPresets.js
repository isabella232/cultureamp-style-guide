import configureIcon from 'cultureamp-style-guide/icons/configure.svg';

const iconPresets = [
  {
    name: 'Meaningful',
    props: { icon: configureIcon, role: 'img', title: 'Warning' },
  },
  {
    name: 'Presentational',
    props: { icon: configureIcon, role: 'presentation' },
  },
  {
    name: 'Inherit size',
    props: { icon: configureIcon, inheritSize: true, role: 'presentation' },
  },
];

export default iconPresets;
