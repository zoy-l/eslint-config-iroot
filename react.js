const { isTs, reactVersion } = require('./utils')

module.exports = {
  extends: [
    isTs ? './typescript' : './base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    'react/jsx-uses-vars': 'off',
    'react/prop-types': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-fragments': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unused-prop-types': 'off'
  },
  settings: {
    react: {
      version: reactVersion
    }
  }
}
