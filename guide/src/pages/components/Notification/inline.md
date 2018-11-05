---
imports:
  Demo: components/Demo.js
  Elm: ./Demo.elm
  IntroParagraph: components/IntroParagraph.js
  presets: ./_inlinePresets.js
---

# Inline Notification

<IntroParagraph>

An inline notification!

</IntroParagraph>

<Demo presets={presets} elm={Elm.Elm.Notification.Demo} />
