import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/module',
    { input: 'src/types/', outDir: 'dist/types' }
  ],
  externals: ['@nuxt/kit', '@nuxt/schema', 'defu', 'pathe', 'vue', 'vite-plugin-compression'],
  declaration: true
})
