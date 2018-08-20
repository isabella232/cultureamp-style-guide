---
imports:
  Demo: components/Demo.js
  Elm: ./Demo.elm
  IntroParagraph: components/IntroParagraph.js
  presets: ./_globalPresets.js
---

# Global Notification

<IntroParagraph>

A global notification!

</IntroParagraph>

<Demo presets={presets} elm={Elm.Notification.Demo} />
