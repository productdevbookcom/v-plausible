import { defineBuildConfig } from 'unbuild'

import pkg from './package.json'

const externals = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

export default defineBuildConfig({
  entries: [
    {
      input: './src/vue/',
      outDir: './dist/vue',
    },
  ],
  clean: true,
  declaration: true,
  externals,
  outDir: 'dist',
})
