const { isTs, reactVersion } = require('./utils')

module.exports = {
  extends: [
    isTs ? './typescript' : './base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
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
  },
  overrides: [
    isTs && {
      files: ['*.ts', '*.tsx'],
      rules: {
        // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
        // does not work with type definitions
        'no-unused-vars': 'off'
      }
    }
  ]
}
