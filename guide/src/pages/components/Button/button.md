---
imports:
  Demo: components/Demo.js
  PresetDemo: components/PresetDemo.js
  Elm: ./ButtonDemo.elm
  IntroParagraph: components/IntroParagraph.js
  buttonPresets: ./_buttonPresets.js
  buttonPresets2: ./Presets
---

# Button

<IntroParagraph>

A button!

</IntroParagraph>

<PresetDemo presets={buttonPresets2} />

<Demo presets={buttonPresets} elm={Elm.Button.ButtonDemo} />
