const { ESLint } = require('eslint')
const path = require('path')

const eslint = new ESLint()

async function lintProject(name) {
  const projectPath = path.resolve(__dirname, 'fixtures', name)
  const filesToLint = path.resolve(projectPath, '**')
  const rest = await eslint.lintFiles(filesToLint)
  const ruleId = []
  rest.forEach((res) =>
    res.messages.forEach((msg) => {
      if (ruleId.indexOf(msg.ruleId) < 0) {
        ruleId.push(msg.ruleId)
      }
    })
  )
  return ruleId
}

test('a react project should pass lint', async () => {
  const rest = await lintProject('react')
  expect(['no-unused-vars', 'react/jsx-no-duplicate-props', 'react/jsx-key', 'no-undef']).toEqual(
    rest
  )
})

test('a react-ts project should pass lint', async () => {
  const rest = await lintProject('react-ts')
  expect([
    '@typescript-eslint/no-empty-interface',
    '@typescript-eslint/no-unused-vars',
    'react/jsx-no-duplicate-props',
    'react/jsx-key'
  ]).toEqual(rest)
})

test('a vue project should pass lint', async () => {
  const rest = await lintProject('vue')
  expect([
    'vue/multi-word-component-names',
    'vue/require-v-for-key',
    'no-const-assign',
    'no-unused-vars',
    'no-undef'
  ]).toEqual(rest)
})

test('a vue-tsx project should pass lint', async () => {
  const rest = await lintProject('vue-tsx')

  expect([
    '@typescript-eslint/no-unused-vars',
    'vue/multi-word-component-names',
    '@typescript-eslint/no-empty-interface',
    null
  ]).toEqual(rest)
})

test('a vue-tsx-sfc project should pass lint', async () => {
  const rest = await lintProject('vue-tsx-sfc')

  expect([
    '@typescript-eslint/no-unused-vars',
    'vue/multi-word-component-names',
    '@typescript-eslint/no-empty-interface'
  ]).toEqual(rest)
})
