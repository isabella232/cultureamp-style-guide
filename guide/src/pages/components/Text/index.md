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

h1 DefaultStyle [text "This is a h1, styled with page-title (the default)"]
h1 PageTitle [text "This is a h1, styled with page-title"]
h1 Display [text "This is a h1, styled with display"]
p PageTitle [text "This is a p, styled with page-title"]
textView Html.aside Lede [text "This is an aside, styled with lede"]
textViewInheritBaseline Html.p DefaultStyle [text "This is an aside, styled as lede"]

</Code>
