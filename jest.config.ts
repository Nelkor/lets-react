import type { Config } from '@jest/types'

import alias from './dev-helpers/alias'

const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: Object.entries(alias).reduce((acc, [key, value]) => {
    acc[key + '/(.*)'] = value + '/$1'

    return acc
  }, {} as Record<string, string>),
}

export default config
