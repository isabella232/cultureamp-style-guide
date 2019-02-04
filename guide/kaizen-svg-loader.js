/**
 * This loader is a stop-gap to enable Gatsby (webpack 1) to support the Kaizen Library.
 * Both configurations use `svg-sprite-loader` that will export sprites in webpack 1 with `module.exports`
 * and in webpack >= 2 using `export default`.
 * Here we cover both scenarios by making sure Sprites are available from `default` if required.
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
