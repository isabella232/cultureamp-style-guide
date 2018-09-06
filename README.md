# Kaizen

**_Culture Amp’s Component Library and Living Style Guide_**

Visit the living style guide at <http://www.cultureamp.design>.

## Contributing

This library is maintained by Culture Amp's Front End Capability Team, but contributions are welcome from anyone.

See [CONTRIBUTING.md][contributing] for more information.

## Using components in your project

Because our components are styled with [CSS Modules][css-modules], consuming
them in your project isn’t as simple as you might expect. If you simply imported
pre-compiled components from an NPM package, you’d either get the styles for
those components embedded in the compiled JavaScript, which is not how we prefer
to deliver our stylesheets, or you would have to import the compiled components
and their compiled styles separately.

To provide a simpler developer experience, this package exposes a Webpack
configuration decorator, which makes the source JavaScript modules for the
components (complete with their references to their CSS modules, SVG symbols,
etc.) available to the host project's Webpack build.

Decorate your Webpack config, passing your `ExtractTextPlugin` instance into the
decorator for it to use to output CSS:

```js
const decorateWithStyleGuide = require('cultureamp-style-guide/webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractTextPlugin = new ExtractTextPlugin({
  filename: '[name]-[hash].bundle.css'
});

const webpackConfig = {
  ⋮
  module: {
    rules: [
      ⋮,
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
          ⋮
        }),
      }
    ],
  },
  plugins: [
    ⋮
    extractTextPlugin,
  ],
};

module.exports = decorateWithStyleGuide(webpackConfig, {
  // Pass your ExtractTextPlugin instance to the decorator
  extractTextPlugin: extractTextPlugin
});
```

### Importing React Components

React components may be imported from the cultureamp-style-guide module, and
then used in other React components. Their stylesheets and SVG dependencies will
be imported automatically thanks to the Webpack configuration decorator above.

```js
import React from 'react';
import Icon from 'cultureamp-style-guide/components/Icon/Icon';

export default function MyComponent(props) {
  return (
    <div>
      <Icon />
    </div>
  );
}
```

**Warning:** You might be tempted to try importing multiple components like
this:

```js
import { Icon, Card } from 'cultureamp-style-guide/components';
```

The Culture Amp Style Guide does not support this (the components directory does
not contain an index.js) because Webpack does not support eliminating the unused
components from this type of import. See
[webpack/webpack#2867](https://github.com/webpack/webpack/issues/2867) for many
examples of people struggling with this.

## Changelog

You can view the release history from the [Releases page on Github](https://github.com/cultureamp/cultureamp-style-guide/releases).

For release history pre-dating 12.4.3, you can see the [old CHANGELOG.md](https://github.com/cultureamp/cultureamp-style-guide/blob/23c17f2e8e296ef0c470e6872cd715321ab1910c/CHANGELOG.md).

---

<small><sup id="nodejs">[1](#fn1)</sup>You should use [NVM][nvm] to install
automatically the version of NodeJS specified in `.nvmrc`, and consider using
[nvm-auto][nvm-auto] to switch to it automatically when working in this
project.</small>

[contributing]: ./CONTRIBUTING.md
[bundler]: https://bundler.io/
[css-modules]: https://github.com/css-modules/css-modules
[nvm]: http://nvm.sh/
[nvm-auto]: https://github.com/jsdf/nvm_auto
[rbenv]: https://github.com/rbenv/rbenv
[yarn]: https://yarnpkg.com/
