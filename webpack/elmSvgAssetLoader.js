const loaderUtils = require('loader-utils');

/**
 * A webpack loader to transform SVG assets in Elm to Webpack require() calls.
 *
 * Searching for elm code:
 *  svgAsset "cultureamp-style-guide/icons/exclamation.svg"
 *
 * Which is compiled as JS code:
 *   _user$project$Icon_SvgAsset$svgAsset('cultureamp-style-guide/icons/exclamation.svg')
 * Or in Elm 0.19:
 *   author$project$Icon$SvgAsset$svgAsset('cultureamp-style-guide/icons/exclamation.svg');
 *
 * We replace this with:
 *   require('cultureamp-style-guide/icons/exclamation.svg').default
 *
 * In future we should replace this with a babel plugin similar to https://github.com/cultureamp/elm-css-modules-plugin
 */
function loader(source, inputSourceMap) {
  const config = loaderUtils.getOptions(this) || {};
  const isElm19 = config.isElm19;
  config.module = config['module'] || 'Icon.SvgAsset';
  config.tagger = config['tagger'] || 'svgAsset';

  const packageName =
    config['package'] || (isElm19 ? 'author/project' : 'user/project');
  const prefix = isElm19 ? '' : '_';
  const moduleSeparator = isElm19 ? '$' : '_';
  const taggerName =
    prefix +
    [
      packageName.replace(/-/g, '_').replace(/\//g, '$'),
      config.module.replace(/\./g, moduleSeparator),
      config.tagger,
    ].join('$');
  const escapedTaggerName = taggerName.replace(/\$/g, '\\$');
  const moduleNameCapture = "'([a-zA-Z-./]+)'";
  const regexp = regexpForFunctionCall(escapedTaggerName, [moduleNameCapture]);

  // Gatsby uses Webpack v1, and so how we require the SVG asset is different.
  const replacement =
    this.version === 1 ? "require('$1')" : "require('$1').default";
  return source.replace(regexp, replacement);
}

/**
 * Create a regular expression to match a function call.
 *
 * @param fnName The name of the function being called. Can include
 *  property access (eg `console.log`)
 * @param args An array of arguments we expect to find. Each of these
 *  can be a regular expression to match the expected type of argument, and can
 *  include capture groups.
 */
function regexpForFunctionCall(fnName, args) {
  const optionalWhitespace = '\\s*';
  const argumentParts = args.map(
    arg => optionalWhitespace + arg + optionalWhitespace
  );
  let parts = [fnName, '\\(', argumentParts.join(','), '\\)'];
  return new RegExp(parts.join(''), 'g');
}

module.exports = loader;
