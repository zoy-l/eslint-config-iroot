const prettier = require('prettier')

const typescript = require('./typescript')
const react = require('./react')
const base = require('./base')
const vue = require('./vue')

module.exports = {
  configs: {
    typescript,
    react,
    base,
    vue
  },
  prettier
}
