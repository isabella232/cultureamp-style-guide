---
imports:
  Demo: components/Demo.js
  Elm: ./Demo.elm
  IntroParagraph: components/IntroParagraph.js
  iconPresets: ./_iconPresets.js
  Link: components/Link.js
---

# Icon

<IntroParagraph>

An icon! To control its color, set color on a parent element, and it will be inherited.

Available for both Elm and React.

</IntroParagraph>

<Demo presets={iconPresets} elm={Elm.Icon.Demo} />

### Interaction States

To signify an icon's <Link to="/styles/icons#interaction-states">Interaction States</Link> we use varying levels of opacity.

We have a helper class you can compose to utilize these styles:

```
.myButton {
  composes: interactiveIconWrapper from 'cultureamp-style-guide/components/Icon/Icon.module.scss';
}

.myReversedButton {
  composes: reversedInteractiveIconWrapper from 'cultureamp-style-guide/components/Icon/Icon.module.scss';
}
```
