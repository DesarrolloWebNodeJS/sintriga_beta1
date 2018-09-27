module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
    'mjs'
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web'
  },
  notify: false,
  setupTestFrameworkScriptFile: './src/__tests__/setup/setupEnzyme.js',
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}'
  ],
  testPathIgnorePatterns: ['./src/__tests__/setup/'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$']
};
