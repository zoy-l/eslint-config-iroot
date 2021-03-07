
const recursiveReaddir = require('recursive-readdir')

module.exports = async function getReactVersion(){
  let reactVersion = 'detect'
  const files = await recursiveReaddir(process.cwd(),['node_modules',".*", "!package.json"])

  for(const file of files){
    const pkg = require(file)
    const { react } = pkg.dependencies ?? {}

    if (react){
      if (isNaN(Number(react.charAt(0))) && react !== 'detect') {
        reactVersion = react.replace(react.charAt(0), '')
      } else {
        reactVersion = react
      }
    }
    if (reactVersion !== 'detect'){
      break
    }
  }
  
  return {
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
}()

