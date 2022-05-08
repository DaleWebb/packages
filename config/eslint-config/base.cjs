module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['prettier', 'plugin:import/errors', 'plugin:import/warnings'],
  ignorePatterns: ['**/dist/*'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  // plugins: ['import', 'jsx-a11y', 'react-hooks'],
  plugins: ['import'],
  // settings: {
  //   react: {
  //     version: 'detect',
  //   },
  // },
  root: true,
  // http://eslint.org/docs/rules/
  rules: {
    complexity: [2, 10],
    'import/default': 0, // @todo
    'import/named': 0, // @todo
    'import/namespace': 0, // @todo
    'import/no-unresolved': 0, // @todo
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '~**/**',
            group: 'sibling',
            position: 'before',
          },
        ],
      },
    ],
    // 'react-hooks/exhaustive-deps': 'warn',
    // 'react-hooks/rules-of-hooks': 'error',
  },
}
