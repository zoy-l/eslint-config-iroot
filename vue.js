const { isTs } = require('./utils')

module.exports = {
  extends: ['plugin:vue/vue3-strongly-recommended', isTs ? './typescript' : './base'],
  parserOptions: {
    extraFileExtensions: ['.vue']
  },
  rules: {
    'vue/jsx-uses-vars': 'off',
    'vue/no-v-html': 'off',
    'vue/attributes-order': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-unused-components': 'off',
    'vue/component-definition-name-casing': [1, 'PascalCase'],
    'vue/html-indent': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/name-property-casing': 'off'
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: require.resolve('vue-eslint-parser')
    },
    {
      files: ['*.jsx', '*.tsx', '*.vue'],
      plugins: ['react'],
      rules: {
        'react/jsx-key': 'error'
      }
    }
  ]
}
