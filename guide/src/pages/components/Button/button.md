---
imports:
  Demo: components/Demo.js
  Elm: ./ButtonDemo.elm
  IntroParagraph: components/IntroParagraph.js
  buttonPresets: ./_buttonPresets.js
  '{TipContainer,TipCard}': components/tip-card
---

# Button

<IntroParagraph>

A button!

</IntroParagraph>

<Demo presets={buttonPresets} elm={Elm.Elm.Button.ButtonDemo} />

## Best practices

<TipContainer>
<TipCard title="Buttons should…" type="tip">

- be 2 to 3 words long.

- put verbs first; use only verbs where possible.

- be sentence case.

- flip the direction of arrow icons when the user is using a right-to-left language.

- either be hyperlinks (if they navigate to a new page and can be opened in a new tab) or a button element.

</TipCard>
<TipCard title="Buttons should not…" type="warning">

- use long phrases.

- have finishing punctuation.

</TipCard>
</TipContainer>
