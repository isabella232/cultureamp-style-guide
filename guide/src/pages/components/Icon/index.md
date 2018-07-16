---
imports:
  Demo: components/Demo.js
  Elm: ./Demo.elm
  IntroParagraph: components/IntroParagraph.js
  iconPresets: ./_iconPresets.js
---

# Icon

<IntroParagraph>

An icon! To control its color, set color on a parent element, and it will be inherited.

Available for both Elm and React.

</IntroParagraph>

<Demo presets={iconPresets} elm={Elm.Icon.Demo} />
