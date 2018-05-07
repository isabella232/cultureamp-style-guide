# Release History: cultureamp-style-guide

## 12.1.1

* 🐛 Add `sass-loader` as a `peerDependency` to help avoid multiple versions of this loader running in a single webpack build, which has been the source of intermittent hangs.

## 12.1.0

* ✨ Add `Layout.Toasts` and `Layout.Announcers`. These regions are used with `aria-live="assertive"` so their contents will be read by a screen reader whenever the contents are changed. These are included in the high-level layout component as some screen readers need these regions to exist on the initial render.
* 👍 Allow `<Text tag="label">`.
* 👍 Add automationId props for MenuItem and Dropdown.
* 👍 Add a chevron to all control-action styled dropdowns.
* 👍 Use Book font-weight for control-actions (was previously using Medium).
* 🐛 Ensure MenuItem links do not have underline on hover. This bug only existed when legacy global styles, such as Bootstrap, were used.

## 12.0.5

* 🐛 Remove unnecessary flex rule that triggered bug with dropdown in IE11.

## 12.0.4

* 🐛 Pin node-sass to version 4.7.2 due to webpack timeouts we are intermittently experiencing.

## 12.0.3

* 👍 Minor improvements to Flow type definitions: `label` prop on Dropdown is now optional, `action` prop on MenuItem now can expect to receive an Event as a parameter to the callback function.

## 12.0.2

* 👍 Use "Book" weight for headings and other type styles. We recommend using the new typography bundle at https://d1vmr11cgrgrrj.cloudfront.net/7095992/css/fonts.css to load these fonts.

## 12.0.1

* 👍 Give control actions a pointer cursor.

## 12.0.0

* 👍 Allow a Dropdown to be styled as a Control Action rather than a Button.
* 👍 Improvements to Control Action type styles.
* 👍 Add "active" and "destructive" states to MenuItem.
* 💔 Remove "subtitle" property on MenuHeader.

## 11.2.1

* 🐛 Fix for icons not being clickable with jQuery delegated event handlers in IE11.

## 11.2.0

* ✨ Introduce new "Text" component

## 11.1.0

* ✨ Introduce new "Layout" component

## 11.0.0

* 💔 Fix spelling mistake (was "Seperator", should have been "Separator"). As the filename included the mistake, this is a breaking change.

## 10.3.0

* ✨ Introduce new "Dropdown" and "MenuList" components
* 👍 Update NavigationBar to use Ideal Sans

## 10.2.1

* 🐛 Fix fill color of arrow-backward icon

## 10.2.0

* ✨ Update all Ideal Sans type styles to the latest in the style guide.

## 10.1.1

* 🐛 Fix missing import in type.scss

## 10.1.0

* 👍 Add border color variables.

## 10.0.2

* 🐛 Fix typing error discovered when using new version of flow.

## 10.0.1

* 🐛 Work around Navigation Bar menu styles broken when built for production
  (with `extract-text-webpack-plugin`).
* 👍 Update React and ReactDOM peer dependencies to v16.

## 10.0.0

* 💔 Remove kaizen "Button" component which is not actually used.
* 🐛 Change type style mixins to position text using
  `position: relative; top: $offset;` rather than
  `transform: translateY(offset);` so to avoid creating "stacking contexts"
  which break the z-index rules required for popups and modals.
* 👍 Add `ca-inherit-baseline` mixin that can be used to prevent a baseline
  shift from occuring when using the type style mixins.

## 9.0.2

* 👍 Add notification icon.

## 9.0.1

* 👍 Use relative styles imports in Layout component.

## 9.0.0

* 💔 Further refine page layout styles.

## 8.0.0

* 💔 Refine page layout styles to support legacy sticky footers and independent
  sidebar scrolling.

## 7.1.0

* ✨ Introduce Layout page layout styles module.

## 7.0.0

* 💔 Renamed type style mixins to make them more autocomplete-friendly:

  * `@include ca-type-title;`
  * `@include ca-type-display;`
  * `@include ca-type-heading;`
  * `@include ca-type-lede;`
  * `@include ca-type-body;`
  * `@include ca-type-control-action;`
  * `@include ca-type-small;`
  * `@include ca-type-labels-and-legends;`

## 6.0.0

* ✨ New type style mixins. These set font-sizes, line-heights and transforms
  required for text to correctly sit on a baseline grid. Usage:

  * `@include ca-title-type;`
  * `@include ca-display-type;`
  * `@include ca-heading-type;`
  * `@include ca-lede-type;`
  * `@include ca-body-type;`
  * `@include ca-control-action-type;`
  * `@include ca-small-type;`
  * `@include ca-labels-and-legends-type;`

  There are also variations for Ideal Sans.

* 💔 Previous sass variables for type styles have been removed. Please use the
  new mixins instead.

## 5.1.7

* 👍 Add `colorScheme` prop to NavigationBar, allowing you to choose
  'cultureamp' (default) or 'kaizen'.
* 👍 Add new SASS variables specific to Ideal Sans.

## 5.1.6

* 👍 Add process manager icon.

## 5.1.5

* 🐛 Fix flaky positioning of tooltip arrows in Firefox.

## 5.1.4

* 👍 Add `automationId` prop to `NavigationBar.Menu`.
* 🐛 Fix clicks being ignored while a `NavigationBar.Menu` is open.

## 5.1.3

* ✨ Add `interactiveIconWrapper` that will apply icon opacities to icons that
  sit inside buttons and other interactive elements. Usage:

      .myButton {
        composes: interactiveIconWrapper from 'cultureamp-style-guide/components/Icon/Icon.module.scss';
      }

## 5.1.2

* 👍 Add tasks icon.

## 5.1.1

* 🐛 Fix compilation issue when multiple postcss-loaders exist.

## 5.1.0

* ✨ Add NavigationBar component.

## 5.0.2

* 👍 Add text analytics icon.

## 5.0.1

* 👍 Add lock icon, re-export exclamation-white icon.

## 5.0.0

* 💔 Renamed CSS modules to use `*.module.scss` naming convention for
  compatibility with Gatsby.
* ✨ Add `styles/layers.scss` with some z-index definitions.
* ✨ Add `styles/border.scss` with variables for border-color, border-radius,
  box-shadow.
* Improvements and changes to `styles/type.scss`
  * ✨ Add `$ca-grid` variable and derive some values from it.
  * ✨ Added `$ca-weight-*` variables (extra-light, light, book, medium,
    semibold) to match Sketch styles.
  * 👍 Change font variables to use Ideal Sans by default, if available.
  * 🐛 Add fallback fonts for when webfonts fail to display.
* Improvements and changes to `styles/color.scss`
  * ✨ Add color variables for `$ca-palette-stone`, `$ca-palette-positive-delta`
    and `$ca-palette-negative-delta`.
* ✨ Began work on styleguide website using Gatsby rather than Jekyll.

### 4.2.0

* ✨ Add animated loading spinner icon.

### 4.1.5

* 🐛 Fix issue where white-filled icon variants weren't showing correctly in IE.

### 4.1.4

* 👍 Rename user icons so that they're more consistent with other icons.

### 4.1.3

* 👍 Change `elmSvgAssetLoader` to use a regular expression rather than Babel,
  as the transformation is quite simple and a regular expression is
  significantly more performant on large Elm code bases.

### 4.1.2

* 🐛 Import dist version of svg-baker-runtime/browser-sprite to fix runtime
  errors.

### 4.1.1

* 👍 Hide SVG spritesheet from accessibility tools.

### 4.1.0

* ✨ Create block_layout modifier for icon styles.

### 4.0.2

* 👍 Add more icons.

### 4.0.1

* 👍 Add more icons.

### 4.0.0

* 💔 Move all icons into a single directory.
* 👍 Introdce both hollowed and filled version of icons.

### 3.2.1 and earlier

* ✨ Ancient history.
