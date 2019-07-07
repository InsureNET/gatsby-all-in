const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'react/jsx-filename-extension': 0,
  },
  settings:  {
    react:  {
      version:  'detect'
    },
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
          ['components', './src/components'],
          ['containers', './src/components/containers'],
          ['layouts', './src/components/layouts'],
          ['pages', './src/pages'],
          ['styles', './src/styles'],
          ['static', './static'],
        ],
      }
    }
  }
}
