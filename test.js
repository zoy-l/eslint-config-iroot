const Eslint = require('eslint').ESLint
const utils = require('./utils')

console.log(utils)

const cli = new Eslint({ cwd: process.cwd() })

const config = cli.calculateConfigForFile('./eslintrc')

config.then((res) => {
  console.log(res)
})
