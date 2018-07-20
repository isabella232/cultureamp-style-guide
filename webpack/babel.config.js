const fs = require('fs');
const path = require('path');

const json = fs.readFileSync(path.resolve(__dirname, '../.babelrc'));
const config = JSON.parse(json);

module.exports = config;
