import prettier from 'prettier'
import { Linter } from 'eslint'

export interface prettier {
  prettier: typeof prettier
}

export interface configs {
  react: Linter.Config
  vue: Linter.Config
  typescript: Linter.Config
  base: Linter.Config
}
