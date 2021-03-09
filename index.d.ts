import prettier from 'prettier'
import { Linter } from 'eslint'

declare const configs: {
  typescript: Linter.Config
  react: Linter.Config
  base: Linter.Config
  vue: Linter.Config
}
export { configs, prettier }
