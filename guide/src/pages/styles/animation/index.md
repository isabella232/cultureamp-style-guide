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

Meaningful motion helps make our product easy for everyone and tells our brand's story.

</IntroParagraph>

## Table of Contents

[[toc]]

## Meaningful motion

We use animation purposefully to:

* Provide our customers, human resource leaders, with visual cues for direction and focus.
* Create a consistent experiential 'feel' across the product.
* Indicate interaction affordances.
* Achieve context shifting.
* Affect our audience's perception of time and indicate something is happening.
* To set a tone that matches our brand.
* Celebrate our customers' milestones.
* Give feedback, especially reassurances.
* Create an emotional, engaging experience with delight.





## Categories of animation

- Choreographed entrances and exits
- Stylized entrances and exits
- Loading and progress
- Show and hide
- Cause and effect
- Ambient information
- Demonstrations
- Interaction feedback





## Designing animations

### Animate once and one hundred times

Every microinteraction animation works well for the first time and the hundredth time.

- Test 100 animated instances shown at once.
- Test a single animation repeated 100 times.



### Aim for a fast time to first interaction

**Aim for a fast time to first interaction of 300ms** or less with primary content or data. Supplementary content may have a delay and arrive after the first 300ms.



### What is *too much* animation?

#### 1. Use 1 primary call to action

If there are continually running animations on a page, the motion draws the user’s attention to the most important thing they need to be doing.



#### 2. Use more user-initiated animation than system-initiated

We are more adventurous with the amount and size of user-initiated animation than system-initiated. If people want to keep clicking a button because of its fun animations, go wild; for looping animations constantly running on a page, cut back! Note: consider player controls to pause, stop or hide animations. See also: [Pause, Stop, Hide: Understanding Success Criterion 2.2.2 from the Web Content Accessibility Guidelines](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html).



#### 3. Minimize browser jank for silky smooth rendering

To minimize browser jank (stuttering or choppiness), we test our animations to ensure they keep up at 60&nbsp;frames per second, including in old browsers and devices. If they cannot keep up, that might be a sign of too much animation.



### Stagger separate items and synchronize connected items

Separate, individual items that are meaningfully different from each other can move separately, with staggered entrances and exits. For example, navigation items that link to wildly different content can enter one after another.

Connected items move together as a single body. We synchronize movement of groups of closely related items.



### Placeholder loading skeletons predict content

Placeholder loading skeletons fill the space that its future content will occupy when it's loaded.

- Give people an idea of **what’s about to come** and what’s happening (it's currently loading).
- Be **subtle**, because it’s not a real, interactive interface.
- Be **flexible to an unknown number of items or shape of data** being loaded. This might be indicated either through composition to suggest the shape of what will arrive, or through repeatable elements.
- When content arrives, it does not move around sharply compared to the placeholder loading skeleton.
- We don’t currently use gradients in our branding aesthetic, so for ‘shimmering’ skeletons we opt for opacity changes rather than animated gradients.



### Choreographed entrances provide a red carpet experience

A **choreographed entrance** or orchestrated entrance introduces elements in a sequence, potentially with overlapping action. We “stage” the most important content.

A **stylized entrance** applies to a single element that may be standalone or part of a choreographed entrance.

Choreographed, stylized entrances focus attention through movement and reinforce our branding and design.

Choreographed entrances are reserved for “red carpet” or “grand unveiling” experiences, such as first use, onboarding, demos, showcasing new features, or landing pages rather than frequently visited pages.

*In contrast to a placeholder loading skeleton*, choreographed or stylized entrances don’t care how long content takes to load. For example, the whole page might be loaded already, but we only reveal each section with a fade as the person scrolls down the page. A single stylized entrance may mask and replace a short loading spinner.

<TipContainer>
<TipCard title="Try to…" type="tip">

* Aim for **fast time to first interaction** and consider if the stylized entrance *feels* slower than instantly loading content.
* Use **consistent direction and movement** in relation to local environment to reinforce context and UI metaphors.
* For entrances, exits, and decorations, animation style is **so subtle that you can’t put your finger on it**.
* **Avoid bounces or overshoots**. We make exceptions when the bounce or overshoot is related to the animation effect or behavior itself, such as our emphasized growing "Take action" pill.


</TipCard>
<TipCard title="Avoid…" type="warning">

* **Content rules**. Draw attention to important content and data, not to interface controls.
* **Avoid keeping people from their content with time-consuming or showy entrances**.
* **Avoid contradicting movement that breaks UI metaphors**, such as an element entering with a fade and slide and exiting with a scale.
* **Avoid sharp, noticeable entrances** that draw attention away from the content to the animation itself.
* **Avoid excessively bouncy animations** that tarnish our trustworthy brand.

</TipCard>
</TipContainer>





### Easing timing functions

When we talk about “ease in”, “ease out”, or “ease-in-out”, we do NOT mean the standard keyword CSS values. We use Culture Amp branded timing function e.g. $ca-ease-in: cubic-bezier(…).

Here are some extremely loose guidelines:

- Ease in (acceleration) for system-initiated animation (e.g. modal pop up).
- Ease out (deceleration) for user-initiated animation (e.g. page transitions).
- Ease in and out (speed up and slow down) when moving a thing from one place to another.
- Linear (constant) for fades and color changes (no movement).
- Bounce for fun and attention (e.g. jiggling errors).



### Durations and delays

Entrances can be faster than exits.

Use delays to “sequence” multiple animations.

Most people first notice or perceive an animation at about the 250ms mark, so we only use the "Immediate" option for the most subtle animations (color changes etc).

Sizing and spacing (e.g. distance to travel) can influence durations needed, so 200ms might be more appropriate than 300ms for some elements.

| Class                   | Duration |
| ----------------------- | -------- |
| .ca-duration-immediate  | 100ms    |
| .ca-duration-rapid      | 200ms    |
| .ca-duration-fast       | 300ms    |
| .ca-duration-slow       | 400ms    |
| .ca-duration-deliberate | 700ms    |





## Effects and styles

### Presets

Here are examples of pre-defined CSS transitions and animations that are ready to use. All transition styles have accompanying mixins that allow you to define customized behavior in respect to _duration_, _delay_, and _direction_.

<TransitionPresets />
<AnimationPresets />

We use **Slide and Fade** for revealing or moving existing content whereas we use **Scale and Fade** for creating content, such as new items in a list.

| Type           | Class                                |
| ----------     | ------------------------------------ |
| Fade           | .ca-animation-fade-{direction}       |
| Slide and Fade | .ca-animation-slide-fade-{direction} |
| Scale and Fade | .ca-animation-scale-fade-{direction} |
| Spin           | .ca-animation-spin-{direction}       |
| Shake          | .ca-animation-shake                  |
| Wiggle         | .ca-animation-wiggle                 |





## Sequencing Animations

<AnimationSequences />

[List sequence animation example](https://codesandbox.io/s/z35w3zzmom)
[List sequence transition example](https://codesandbox.io/s/o72wwooq0y)





## Technical considerations

### Rendering performance

For fast 60&nbsp;frames per second animations, you can cheaply animate:

- Opacity
- Translate (move the position)
- Scale (pixel scaling)
- Rotate

Note: none of these affect the “box” the item takes up on the page. You can use “transform: scale” or “transform: translate” but the content will still take up the same space on the page as if no transform happened.

For animating other properties, you might use “will-change” so the browser can set up appropriate optimizations ahead of time before the element is actually changed.



### Animate collapsing height

There are trade-offs to the different approaches to Expand and Collapse animations.

- “transform: scaleY()” - fast, but items below do not move up
- “transform: translateY()” - fast, but items below do not move up
- “height: 0” - the box shrinks height, so content inside is reflowed (can look awkward, or generate scrollbars, etc.)
- “margin-top:” - the box stays the same size, but shifts up and consumes less space, so items below shift up. (This can result in overlapping content above if you are not careful!) Useful if you want to “slide behind” another element or if you time it so the shift up happens in conjunction with a fade out such that it has mostly faded out by the time it would overlap with other content.

