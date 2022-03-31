const { isTs, reactVersion } = require('./utils')

module.exports = {
  extends: [
    isTs ? './typescript' : './base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    'react/self-closing-comp': 2,
    // 合并空标签
    'react/jsx-uses-vars': 'off',
    // 防止将JSX中使用的变量错误地标记为未使用
    'react/prop-types': 'off',
    // 防止在React组件定义（反应/道具类型）中缺少道具验证
    'react/jsx-handler-names': 'off',
    // 在JSX中强制执行事件处理程序命名约定
    'react/jsx-fragments': 'off',
    // 对React片段（react / jsx-fragments）强制使用简写形式或标准形式
    'react/react-in-jsx-scope': 'off'
    // 使用JSX时防止React丢失（react / react-in-jsx-scope）
  },
  settings: {
    react: {
      version: reactVersion
    }
  }
}
