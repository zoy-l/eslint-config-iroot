module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    node: true,
    jest: true,
    browser: true
  },
  rules: {
    'no-new': 'off',
    // 使用 new 构造函数必须储存在变量中
    'no-shadow': 'off',
    // 禁止变量共享相同名称
    'no-bitwise': 'off',
    // 位运算符
    'func-names': 'off',
    // 给函数表达式名称
    'no-console': 'off',
    // 禁止console
    'no-plusplus': 'off',
    // 不允许使用一元运算符
    'no-debugger': 'off',
    // 不允许使用debugger
    'default-case': 'off',
    // switch语句都有一个default
    'prefer-template': 'off',
    // 在--fix命令行上的选项可以自动修复
    'consistent-return': 'off',
    // 强制函数返回指定类型的值
    'no-param-reassign': 'off',
    // 赋值函数的参数
    'no-nested-ternary': 'off',
    // 嵌套三元表达式
    'no-underscore-dangle': 'off',
    // 悬挂下划线在标识符的开头或末尾是下划线
    'no-unused-expressions': 'off',
    // 对程序状态没有影响的未使用表达式表示逻辑错误
    'no-restricted-globals': 'off',
    // 禁用特定全局变量
    'class-methods-use-this': 'off',
    // 没有调用的方法 因加上静态前缀
    'prefer-destructuring': ['error', { object: true, array: false }],
    // 强制解构

    /* *************************************
     * eslint-plugin-import
     ************************************* */
    'import/order': 'off',
    // 导入顺序
    'import/extensions': 'off',
    // 扩展名
    'import/no-unresolved': 'off',
    // 导入相关
    'import/prefer-default-export': 'off',
    // 默认导出
    'import/no-extraneous-dependencies': 'off'
    // 外部依赖相关
  }
}
