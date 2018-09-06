---
imports:
  Demo: components/Demo.js
  Elm: ./Demo.elm
  Code: components/Code.js
  IntroParagraph: components/IntroParagraph.js
  presets: ./_presets.js
---

# Text

<IntroParagraph>

A generic text component which applies the Culture Amp typography styles.

You can use the default type styles for the semantic element you choose, or choose a custom type style.

</IntroParagraph>

<Demo presets={presets} elm={Elm.Text.Demo} />

## Elm

In Elm there are helpers for each element, and you must specify a style value - though one of the options is `DefaultStyle`.

If you wish to use a custom element or to cancel the baseline grid shift, use `textView` or `textViewInheritBaseline`.

<Code>

Text.view h1 [text "This is a h1, styled with page-title (the default)"]
Text.view (h1 |> style PageTitle) [text "This is a h1, styled with page-title"]
Text.view (h1 |> style Display) [text "This is a h1, styled with display"]
Text.view (p |> style PageTitle) [text "This is a p, styled with page-title"]
Text.view (p |> inheritBaseline True) [text "This text inherits the baseline"]

</Code>
