---
imports:
  AnimationDroplet: ./_AnimationDroplet.js
  AnimationDropletGrid: ./_AnimationDropletGrid.js
  IntroParagraph: components/IntroParagraph.js
  "{TipContainer,TipCard}": components/tip-card
---

# Animation

<IntroParagraph>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lacus ac odio pretium, sed pellentesque quam commodo. In hac habitasse platea dictumst. Curabitur tempor, nisi et elementum facilisis, nibh erat laoreet neque, quis bibendum nunc leo eu dui.

</IntroParagraph>

## What is animation for?

* Create a consistent experiential 'feel' across the product.
* Provide the user with visual cues for direction and focus.
* ...

## Motion Design Principles

* Easing / timing functions:
* Duration & delays
* Stagger /& synchronise
* ...

## Glossary of Animation Presets

<AnimationDropletGrid>
  <AnimationDroplet type="pulse" color="#45AD8F" />

  <AnimationDroplet type="rubberband" color="#1B7688" />

  <AnimationDroplet type="jello" color="#253C64" />

  <AnimationDroplet type="fadeInUp" color="#727193" />

  <AnimationDroplet type="bounceInUp" color="#F3786D" />
</AnimationDropletGrid>

## Technical Considerations

* Achieving 60 fps
* Collapsing height
* ...

### Do’s and Dont’s

<TipContainer>
<TipCard title="Icons should…" type="tip">

* use CSS transformations.

</TipCard>
<TipCard title="Icons should not…" type="warning">

* avoid animating width, height... properties where possible

</TipCard>
</TipContainer>
