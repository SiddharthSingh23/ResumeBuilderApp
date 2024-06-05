module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: ['react', 'react-native'],
  rules: {
    // Your custom rules here
  },
};
