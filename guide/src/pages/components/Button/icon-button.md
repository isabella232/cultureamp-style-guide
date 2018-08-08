---
imports:
  Demo: components/Demo.js
  Elm: ./Demo.elm
  IntroParagraph: components/IntroParagraph.js
  buttonPresets: ./_iconButtonPresets.js
---

# Icon Button

<IntroParagraph>

A button with an icon but no label.

Available for both Elm and React.

</IntroParagraph>

<Demo presets={buttonPresets} elm={Elm.Button.Demo} />
