---
imports:
  InlineNotification: cultureamp-style-guide/components/Notification/InlineNotification.js
  IntroParagraph: components/IntroParagraph.js
  LocalisationMixinImportExample: ./examples/LocalisationMixinImportExample.js
  CATypeAlignExample: ./examples/CATypeAlignExample.js
  CAMarginExample: ./examples/CAMarginExample.js
  CAPaddingExample: ./examples/CAPaddingExample.js
  CAPositionExample: ./examples/CAPositionExample.js
  RTLLayoutExample: ./examples/RTLLayoutExample.js
---

# Localisation Guide

<IntroParagraph>

Welcome to the CultureAmp Localisation 'Getting Started' guide. We hope that the following information will provide you with adequate technical knowledge on how we do localisation at CultureAmp. If you believe something is missing or could be improved please feel free to [contribute](https://github.com/cultureamp/cultureamp-style-guide).

</IntroParagraph>

## Overview

As the CultureAmp product/s mature and grow we want to be able to support as many languages as needed. Aside from the obvious language changes required certain languages also require that our User Interfaces support different directional layouts e.g. _Right To Left (RTL)_. The guidelines below outline some of the core approaches we can take to ensure we cater for languages that need RTL support.

<InlineNotification persistent={true} type="affirmative">

**Tip:** It is a good idea to start thinking about the horizontal flow of a layout as `start` and `end` as opposed to `left` and `right`. This will help you determine where you need to cater for RTL layout support. CSS [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) takes this approach and uses `flex-start` and `flex-end` for positioning elements within a flex container. Wherever possible start using flexbox for you layout and you will find you get a lot of RTL support for free!

</InlineNotification>

## Getting Started

CultureAmp have a number of [SASS](https://sass-lang.com/) mixins which are available from [Kaizen](https://github.com/cultureamp/cultureamp-style-guide) for you to use. To start using them you will need to ensure the correct mixin file is imported.

<LocalisationMixinImportExample />

## Text Alignment

If you explicity need to set the `text-align` property for your document or component you should use the `ca-type-align-start`or `ca-type-align-end` mixin as follows. As an example using `ca-type-align-start` in a Left To Right layout will result in left aligned text whereas in a Right To Left layout this will be right aligned.

<CATypeAlignExample />

##### Available Mixins

| Name                | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| ca-type-align-start | left aligned text in **LTR** or right aligned text in **RTL** |
| ca-type-align-end   | right aligned text in **LTR** or left aligned text in **RTL** |

## Margins/Padding/Position

When using any `left` or `right` specific css properties e.g. `margin-left`, `padding-left`, `left`... It is very common to need these values 'flipped' in a RTL layout. To help with this the following mixins are available.

<InlineNotification persistent={true} type="informative">

**Note:** These mixins also take a `$top` and `$bottom` value. While these values are never 'flipped' they can be supplied to the mixin which will avoid any css rules being over written.

</InlineNotification>

### Margins

<CAMarginExample />

##### Params

Note that all params are optional.

| Name    | Value                       |
| ------- | --------------------------- |
| $top    | any valid css size and unit |
| $bottom | any valid css size and unit |
| $start  | any valid css size and unit |
| $end    | any valid css size and unit |

### Padding

<CAPaddingExample />

##### Params

Note that all params are optional.

| Name    | Value                       |
| ------- | --------------------------- |
| $top    | any valid css size and unit |
| $bottom | any valid css size and unit |
| $start  | any valid css size and unit |
| $end    | any valid css size and unit |

### Position

This mixin is relevant to `absolute` or `relative` positioned elements.

<CAPositionExample />

##### Params

Note that all params are optional.

| Name    | Value                       |
| ------- | --------------------------- |
| $top    | any valid css size and unit |
| $bottom | any valid css size and unit |
| $start  | any valid css size and unit |
| $end    | any valid css size and unit |

## FAQs

**Q:** How can I test RTL layout support?
**A:** Add `"rtl"` to the `dir` attribute on any parent element.

<RTLLayoutExample />
