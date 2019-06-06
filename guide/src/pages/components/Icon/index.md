---
imports:
  Demo: components/Demo.js
  Elm: ./Demo.elm
  InlineNotification: cultureamp-style-guide/components/Notification/InlineNotification.js
  IntroParagraph: components/IntroParagraph.js
  iconPresets: ./_iconPresets.js
  Link: components/Link.js
---

# Icon

<div><InlineNotification persistent={true} type="cautionary" title="Out of date">This documentation is out of date while we update the site. Until then, Culture Amp employees can refer to the <a href="https://cultureamp.atlassian.net/wiki/spaces/CA/pages/916161089/Kaizen+Visual+Documentation+Status">visual documentation status page on the wiki</a>.</InlineNotification></div>

<IntroParagraph>

An icon! To control its color, set color on a parent element, and it will be inherited.

</IntroParagraph>

<Demo presets={iconPresets} elm={Elm.Elm.Icon.Demo} />

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
