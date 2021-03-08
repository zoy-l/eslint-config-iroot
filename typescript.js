module.exports = {
  extends: ['./base.js', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    // 驼峰命名
    '@typescript-eslint/ban-ts-comment': 'warn',
    // @ts-xxxx
    '@typescript-eslint/no-unused-vars': 'error',
    // 没有用的变量定义
    '@typescript-eslint/no-var-requires': 'off',
    // 除导入语句外，禁止使用require语句
    '@typescript-eslint/no-explicit-any': 'off',
    // 禁止使用any类型
    '@typescript-eslint/no-empty-function': 'off',
    // 禁止空函数
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 使用!后缀运算符禁止非空断言
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 在函数和类方法上需要显式的返回类型
    '@typescript-eslint/explicit-module-boundary-types': 'off'
    // 在导出函数和类的公共类方法上要求显式的返回值和参数类型
  }
}
