---
imports:
  AnimationPresets: ./examples/_AnimationPresets.js
  AnimationSequences: ./examples/_AnimationSequences.js
  TransitionPresets: ./examples/_TransitionPresets.js
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

## Durations and Delays

From the studies cited in the book, most people first notice/perceive an animation at about the 250ms mark, so you should only use the "Immediate" option for the most subtle animations (color changes etc).

Sizing and spacing (e.g. distance to travel) can influence the durations needed, so 200ms might be more appropriate than 300ms for some elements.

| CSS class                 | Duration |
| ------------------------- | -------- |
| `.ca-duration-immediate`  | 100ms    |
| `.ca-duration-fast`       | 300ms    |
| `.ca-duration-slow`       | 400ms    |
| `.ca-duration-deliberate` | 700ms    |

## Transitions

### Presets

Below are examples of pre-defined css transitions that are ready to use. Please be aware that all transitions have accompanying mixins that allow you to define customised transition in respect to `duration`, `delay`, `direction`...

<TransitionPresets />

| Type  | CSS class                       |
| ----- | ------------------------------- |
| Fade  | `.ca-transition-fade-[in|out]`  |
| Slide | `.ca-transition-slide-[in|out]` |
| Zoom  | `.ca-transition-zoom-[in|out]`  |
| Spin  | `.ca-transition-spin-[in|out]`  |

## Animations

### Presets

<AnimationPresets />

| Type   | CSS class              |
| ------ | ---------------------- |
| Shake  | `.ca-transition-shake` |
| Wiggle | `.ca-animation-wiggle` |

## Sequencing Animations

<AnimationSequences />

[List sequence animation example](https://codesandbox.io/s/z35w3zzmom)
[List sequence transition example](https://codesandbox.io/s/o72wwooq0y)

## Technical Considerations

* Achieving 60 fps
* Collapsing height
* ...

### Do’s and Dont’s

<TipContainer>
<TipCard title="Try to…" type="tip">

* use CSS animations.

</TipCard>
<TipCard title="Avoid…" type="warning">

* animating width, height... properties where possible

</TipCard>
</TipContainer>
