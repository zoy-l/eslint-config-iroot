const prettier = require('prettier')
const base = require('./base')
const typescript = require('./typescript')
const react = require('./react')
const vue = require('./vue')

module.exports = {
  configs: {
    base,
    typescript,
    react,
    vue
  },
  prettier
}
