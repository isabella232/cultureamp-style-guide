---
imports:
  Demo: components/Demo.js
  Elm: ./Demo.elm
  IntroParagraph: components/IntroParagraph.js
  presets: ./_toastPresets.js
---

# Toast Notification

<IntroParagraph>

A toast notification!

Available for both Elm and React.

</IntroParagraph>

<Demo presets={presets} elm={Elm.Notification.Demo} />
