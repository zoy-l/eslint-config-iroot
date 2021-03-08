const Eslint = require('eslint').ESLint

const cli = new Eslint({ cwd: process.cwd() })

const config = cli.calculateConfigForFile('./eslintrc')

config.then((res) => {
  console.log(res)
})
