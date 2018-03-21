const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function modifyWebpackConfig(_ref, options) {
  var config = _ref.config,
    stage = _ref.stage;
  addSassLoaders(config, stage);
  addSrcResolveRoot(config);
  addSvgLoaders(config);
  if (stage === 'build-javascript' || stage === 'develop') {
    addElmLoader(config);
  }
  addMarkdownLoader(config);
  addStyleGuideBabelLoader(config);
  return config;
}

function addSassLoaders(config, stage) {
  // This is based on gatsby-plugin-postcss-sass, but matched to our configuration.
  const sassFiles = /\.s[ac]ss$/,
    sassModulesFiles = /\.module\.s[ac]ss$/,
    cssLoader =
      'css?' +
      JSON.stringify({
        modules: true,
        minimize: true,
        // This ensures `compose:` will use both sass-loader and postcss-loader.
        importLoaders: 2,
        localIdentName: '[name]__[local]--[hash:base64:5]',
        sourcMap: stage.startsWith('build'),
      }),
    sassLoader =
      'sass?' +
      JSON.stringify({
        precision: 9,
      }),
    postCssLoader =
      'postcss?' +
      JSON.stringify({
        // Each postcss-loader instance needs a unique ident.
        ident: 'kaizen-gatsby-website',
      });

  switch (stage) {
    case 'develop': {
      config.loader('sass', {
        test: sassFiles,
        exclude: sassModulesFiles,
        loaders: ['style', 'css', postCssLoader, sassLoader],
      });

      config.loader('sassModules', {
        test: sassModulesFiles,
        loaders: ['style', cssLoader, postCssLoader, sassLoader],
      });
      return config;
    }
    case 'build-css':
    case 'develop-html':
    case 'build-javascript':
    case 'build-html': {
      config.loader('sass', {
        test: sassFiles,
        exclude: sassModulesFiles,
        loader: ExtractTextPlugin.extract([
          'css?minimize',
          postCssLoader,
          sassLoader,
        ]),
      });

      config.loader('sassModules', {
        test: sassModulesFiles,
        loader: ExtractTextPlugin.extract('style', [
          cssLoader,
          postCssLoader,
          sassLoader,
        ]),
      });
      return config;
    }
    default: {
      return config;
    }
  }
}

function addElmLoader(config) {
  config.loader('elm-webpack-loader', {
    test: /\.elm$/,
    exclude: [/elm-stuff/, /node_modules/],
    loaders: ['elm-css-modules-loader', 'elm-webpack-loader'],
  });
}

function addSvgLoaders(config) {
  let svgoConf = require('cultureamp-style-guide/webpack/svgo.config.js');

  // Note: the SVGO Conf has a regular expression, which can't be used with JSON.stringify.
  // Here we replace it with a plain string, which works well enough for now.
  let convertColorsPlugin = svgoConf.plugins.find(
    plugin => plugin.convertColors
  );
  convertColorsPlugin.convertColors.currentColor = '#000000';

  let spriteLoaderConf = {
    symbolId: 'ca-icon-[name]',
  };
  config.removeLoader('url-loader');
  config.loader('svg-sprite-loader', {
    test: /\.svg$/,
    loaders: [
      'svg-sprite-loader?' + JSON.stringify(spriteLoaderConf),
      'svgo-loader?' + JSON.stringify(svgoConf),
    ],
  });
}

function addMarkdownLoader(config) {
  const babelConfig = {
      presets: ['env', 'stage-0', 'react'],
    },
    mdConfig = {
      passElementProps: true,
      markdownItPlugins: [
        require.resolve('markdown-it-anchor'),
        require.resolve('markdown-it-table'),
        [
          require.resolve('markdown-it-table-of-contents'),
          { includeLevel: [2, 3, 4] },
        ],
      ],
    };
  config.loader('markdown-component-loader', {
    test: /\.mdx?$/i,
    loaders: [
      'babel-loader?' + JSON.stringify(babelConfig),
      require.resolve('./src/webpack-util/markdownWrapper.js'),
      'markdown-component-loader?' + JSON.stringify(mdConfig),
    ],
  });
}

function addStyleGuideBabelLoader(config) {
  const babelConfig = {
    presets: ['env', 'stage-0', 'react'],
  };
  config.loader('style-guide-babel', {
    test: /\.jsx?$/i,
    include: path.resolve(
      'node_modules',
      'cultureamp-style-guide',
      'components'
    ),
    loaders: ['babel-loader?' + JSON.stringify(babelConfig)],
  });
}

function addSrcResolveRoot(config) {
  config.merge({
    resolve: {
      root: [path.resolve('node_modules'), path.resolve('src')],
    },
  });
}

exports.modifyWebpackConfig = modifyWebpackConfig;

exports.resolvableExtensions = function() {
  return ['.mdx'];
};
