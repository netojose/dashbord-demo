module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier'
  ],
  ignorePatterns: [
    'bundling-utils',
    'coverage',
    'dist',
    'node_modules',
    'styled-system',
    '.eslintrc.cjs',
    'vite.config.ts',
    'panda*',
    'postcss.config.cjs',
    'setup-tests.js'
  ],
  parserOptions: {
    project: './tsconfig.app.json',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['react-refresh'],
  rules: {
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'import/extensions': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    'react-refresh/only-export-components': [
      'error',
      { allowConstantExport: true }
    ]
  },
  overrides: [
    {
      files: [
        './vite.config.ts',
        './setup-tests.js',
        './bundling-utils/remove-unused-css-vars.ts',
        './bundling-utils/remove-unused-keyframes.ts'
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off'
      }
    }
  ]
}
