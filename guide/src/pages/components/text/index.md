---
imports:
  Demo: components/Demo.js
  IntroParagraph: components/IntroParagraph.js
  Text: ../../../../../components/Text/Text.js
  presets: ./_presets.js
---

# Text

<IntroParagraph>

A generic text component which sets the default styles for the semantic element you choose.

You can override the styles with the `style` property.

You can cancel the baseline alignment by using `inheritBaseline={true}`

</IntroParagraph>

<Demo component={Text} presets={presets} />
