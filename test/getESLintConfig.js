const Eslint = require('eslint').ESLint
const path = require('path')
const utils = require('../utils')

const cli = new Eslint()

const config = cli.calculateConfigForFile(path.join(__dirname, '../eslintrc'))

console.log(utils)
config.then((res) => {
  console.log(res)
})
