import { defineNuxtModule } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import viteCompression from 'vite-plugin-compression'
import type { CompressionOptions } from './types'

export default defineNuxtModule<CompressionOptions>({
  name: '@nuxt-modules/compression',
  configKey: 'compression',
  setup (options: CompressionOptions, nuxt: Nuxt) {
    nuxt.hook('vite:extendConfig', (clientConfig) => {
      clientConfig.plugins.push(viteCompression(options))
    })
  }
})

export * from './types'

declare module '@nuxt/schema' {
  interface ConfigSchema {
    publicRuntimeConfig?: {
      compression?: CompressionOptions
    }
  }
}
