module.exports = {
  extends:['prettier/vue','plugin:vue/vue3-recommended'],
  parserOptions: {
    extraFileExtensions: ['.vue']
  },
  rules: {
    'vue/no-v-html': 'off',
    'vue/attributes-order': 'off',
    'vue/require-v-for-key': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-unused-components': 'off',
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case']
  }
}
