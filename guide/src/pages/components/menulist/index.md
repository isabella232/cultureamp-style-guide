---
imports:
  Demo: components/Demo.js
  IntroParagraph: components/IntroParagraph.js
  MenuList: ../../../../../components/MenuList/
  presets: ./_presets.js
---

# Menu List

<IntroParagraph>

A generic list of items or actions, to be used with dropdown menus etc.

Currently available for React.

</IntroParagraph>

<Demo component={MenuList} presets={presets} />

## Example code:

React To import:

```
import {
  MenuList,
  MenuHeader,
  MenuItem,
  MenuSeparator,
} from 'cultureamp-style-guide/components/MenuList';
```

To render:

```
  <MenuList>
    <MenuHeader title="My Dropdown Menu" />
    <MenuItem action={() => alert('print!')} icon={print} hoverIcon={false}>
      Print (icon)
    </MenuItem>
    <MenuItem action={() => alert('print!')} icon={print} hoverIcon={true}>
      Print (hover icon)
    </MenuItem>
    <MenuItem action={() => alert('print!')}>Print (no icon)</MenuItem>
    <MenuSeparator />
    <MenuItem action="https://www.cultureamp.com/">
      Culture Amp (no icon)
    </MenuItem>
  </MenuList>
```
