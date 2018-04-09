import React from 'react';
import Kebab from 'cultureamp-style-guide/components/Kebab';
import {
  MenuList,
  MenuHeader,
  MenuItem,
} from 'cultureamp-style-guide/components/MenuList';
import styles from './ColorCard.module.scss';
import duplicate from 'cultureamp-style-guide/icons/duplicate.svg';

const ColorBlockKebab = ({ bgColor, sassVar }) => {
  const hex = bgColor.hex(),
    rgb = bgColor
      .rgb()
      .array()
      .map(Math.round)
      .join(', '),
    cmyk = bgColor
      .cmyk()
      .array()
      .map(Math.round)
      .join(', ');
  return (
    <span className={styles.kebabContainer}>
      <Kebab>
        <MenuList>
          <MenuHeader title="Color Values" />
          <MenuItem {...getColorDropdownItem('SASS', sassVar)} />
          <MenuItem {...getColorDropdownItem('HEX', hex)} />
          <MenuItem {...getColorDropdownItem('RGB', rgb)} />
          <MenuItem {...getColorDropdownItem('CMYK', cmyk)} />
        </MenuList>
      </Kebab>
    </span>
  );
};

const getColorDropdownItem = (type, value) => {
  let input;
  return {
    children: (
      <div className={styles.dropdownItem} title="Copy to clipboard">
        <strong>{type}</strong>
        <input
          type="text"
          value={value}
          readOnly={true}
          ref={i => (input = i)}
        />
      </div>
    ),
    action: () => {
      if (input) {
        input.select();
        document.execCommand('copy');
      }
    },
    icon: duplicate,
    hoverIcon: true,
  };
};

export default ColorBlockKebab;
