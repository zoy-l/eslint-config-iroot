
const path = require('path')

const pkg = path.join(process.cwd(), 'package.json')
const { react = 'detect' } = pkg.dependencies ?? {}

let reactVersion
if (isNaN(Number(react.charAt(0))) && react !== 'detect') {
  reactVersion = react.replace(react.charAt(0), '')
} else {
  reactVersion = react
}

module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  rules:{
    "react/prop-types": "off",
    "react/jsx-handler-names": "off",
    "react/jsx-fragments": "off",
    "react/react-in-jsx-scope":"off",
    "react/no-unused-prop-types": "off",
  },
  settings:  {
      react: {
        version: reactVersion
      }
    }
}
