
const path = require('path')

const pkg = path.join(process.cwd(), 'package.json')
const { react = 'detect' } = pkg.dependencies ?? {}

let reactVersion
if (isNaN(Number(react.charAt(0))) && react !== 'detect') {
  reactVersion = react.replace(react.charAt(0), '')
} else {
  reactVersion = react
}

console.log(reactVersion);