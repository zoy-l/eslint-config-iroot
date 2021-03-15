const minimatch = require('minimatch')
const fs = require('fs')
const p = require('path')

// potential problems may arise how to know when you are done?
function recursiveReaddirSync(path) {
  let list = []
  const files = fs
    .readdirSync(path)
    .filter((file) => file !== 'node_modules' && file.charAt(0) !== '.')
  let stats

  files.forEach((file) => {
    stats = fs.lstatSync(p.join(path, file))
    if (stats.isDirectory()) {
      list = list.concat(recursiveReaddirSync(p.join(path, file)))
    } else {
      list.push(p.join(path, file))
    }
  })

  return list.filter((f) => minimatch(f, '**/*.json') || minimatch(f, '*.json'))
}

const files = recursiveReaddirSync(process.cwd())

let isTs = false
let reactVersion = 'detect'
while (files.length) {
  const file = files.shift()
  if (/tsconfig.json/.test(file)) {
    isTs = true
    continue
  }

  const pkg = require(file)

  const { react } = pkg.dependencies || {}

  if (react && typeof react === 'string') {
    if (isNaN(Number(react.charAt(0)))) {
      reactVersion = react.replace(react.charAt(0), '')
    } else {
      reactVersion = react
    }
  }
}

module.exports = {
  isTs,
  reactVersion
}
