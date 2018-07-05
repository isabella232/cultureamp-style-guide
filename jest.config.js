module.exports = {
  verbose: true,
  rootDir: process.env.PWD,
  automock: false,
  timers: 'fake',
  moduleDirectories: ['node_modules', process.env.PWD],
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/tmp',
    '<rootDir>/guide',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(svg)$': 'identity-obj-proxy',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
