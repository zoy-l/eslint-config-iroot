const { isTs } = require('./utils')

module.exports = {
  extends: ['plugin:vue/vue3-strongly-recommended', isTs ? './typescript' : './base'],
  parserOptions: {
    extraFileExtensions: ['.vue']
  },
  rules: {
    'vue/jsx-uses-vars': 'off',
    // 防止将JSX中使用的变量标记为未使用
    'vue/no-v-html': 'off',
    // 禁止使用v-html防止XSS攻击
    'vue/attributes-order': 'off',
    // 强制属性顺序
    'vue/require-default-prop': 'off',
    // 必须设置默认值
    'vue/component-definition-name-casing': [1, 'PascalCase'],
    // 组件驼峰命名
    'vue/html-indent': 'off',
    // 格式
    'vue/html-closing-bracket-newline': 'off',
    // 在标签的右括号之前要求或不允许换行
    'vue/singleline-html-element-content-newline': 'off',
    // 在单行元素的内容之前和之后需要换行
    'vue/html-self-closing': 'off',
    // 自我关闭风格
    'vue/no-multiple-template-root': 'off',
    // 禁止向模板添加多个根节点
    'vue/max-attributes-per-line': 'off',
    // 强制每行的最大属性数
    'vue/name-property-casing': 'off',
    // 对Vue组件中的name属性强制使用特定大小写
    'vue/no-static-inline-styles': 'error'
    // static inline styles 顾名思义
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: require.resolve('vue-eslint-parser')
    }
  ]
}
