---
imports:
  Demo: components/Demo.js
  InlineNotification: cultureamp-style-guide/components/Notification/InlineNotification.js
  IntroParagraph: components/IntroParagraph.js
  presets: ./_presets.js
---

<InlineNotification persistent={true} type="cautionary" title="Out of date">This documentation is out of date while we update the site. Until then, Culture Amp employees can refer to the <a href="https://cultureamp.atlassian.net/wiki/spaces/CA/pages/916161089/Kaizen+Visual+Documentation+Status">visual documentation status page on the wiki</a>.</InlineNotification>

# Menu List

<IntroParagraph>

A generic list of items or actions, to be used with dropdown menus etc.

</IntroParagraph>

<Demo presets={presets} />

### Import snippet

To import js React components into your JS file:

```
import {
  MenuList,
  MenuHeader,
  MenuItem,
  MenuSeparator,
} from 'cultureamp-style-guide/components/MenuList';
```
