---
imports:
  Demo: components/Demo.js
  Elm: ./Demo.elm
  IntroParagraph: components/IntroParagraph.js
  buttonPresets: ./_iconButtonPresets.js
---

# Icon Button

<IntroParagraph>

An icon only button!

Available for both Elm and React.

</IntroParagraph>

<Demo presets={buttonPresets} elm={Elm.Button.Demo} />
