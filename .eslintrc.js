module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    rules: {
      quotes: ['error', 'single'],
      indent: ['error', 2],
      curly: 'error',
      'object-curly-spacing': ['error', 'always']
    }
  };