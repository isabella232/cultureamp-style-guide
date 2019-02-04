/**
 * This loader is a stop-gap to enable Gatsby (webpack 1) to spport the Kaizen Library.
 * Both configurations use `svg-sprite-loader` that will export sprites in webpack 1 with `module.exports`
 * and in webpack >= 2 user `export default`.
 * Here we make sure Sprites are available from `default` if required.
 */
module.exports = function(source) {
  const regex = /@cultureamp\/kaizen\/icons$/; // path to kaizen svg's
  const isKaizenSvgUrl = /@cultureamp\/kaizen\/icons$/.test(this.context);

  if (isKaizenSvgUrl) {
    return source.replace(
      'module.exports = symbol',
      'module.exports = Object.assign({}, { default: symbol }, symbol )'
    );
  }

  return source;
};
