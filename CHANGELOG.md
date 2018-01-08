# Release History: cultureamp-style-guide

## 5.0.2

* 👍  Add text analytics icons.

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
