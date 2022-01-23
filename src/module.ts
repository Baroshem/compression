import defu from 'defu'
import { resolve } from 'pathe'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import type { LazyLoadOptions } from './types'

export default defineNuxtModule<LazyLoadOptions>({
  name: '@nuxt-modules/lazy-load',
  configKey: 'lazyLoad',
  setup (options: LazyLoadOptions, nuxt: Nuxt) {
    nuxt.options.publicRuntimeConfig.lazyLoad = defu(nuxt.options.publicRuntimeConfig.lazyLoad, {
      selector: options.selector,
      options: options.options
    })

    addPlugin(resolve(__dirname, './plugins/lazy-load'))

    nuxt.hook('autoImports:dirs', (dirs) => {
      dirs.push(resolve(__dirname, './composables'))
    })
  }
})

export * from './types'

declare module '@nuxt/schema' {
  interface ConfigSchema {
    publicRuntimeConfig?: {
      lazyLoad?: LazyLoadOptions
    }
  }
}
