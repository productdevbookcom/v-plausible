import {
  addImports,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'
import { defu } from 'defu'

import { name, version } from '../package.json'
import type { OptionPlugin } from './vue/plugin'

export interface ModuleOptions extends OptionPlugin {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'plausible',
    compatibility: {
      nuxt: '^3.1.1',
    },
  },
  defaults: {
    init: {
      domain: 'localhost',
      apiHost: 'https://plausible.io',
      trackLocalhost: false,
    },
    settings: {
      enableAutoOutboundTracking: false,
      enableAutoPageviews: true,
    },
    partytown: false,
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.plausible = defu(options, {
      init: {
        domain: 'localhost',
        apiHost: 'https://plausible.io',
        trackLocalhost: false,
      },
      settings: {
        enableAutoOutboundTracking: false,
        enableAutoPageviews: true,
      },
      partytown: false,
    })

    nuxt.options.vite.optimizeDeps = nuxt.options.vite.optimizeDeps || {}
    nuxt.options.vite.optimizeDeps.exclude = nuxt.options.vite.optimizeDeps.exclude || []
    nuxt.options.vite.optimizeDeps.exclude.push('plausible-tracker')

    addPlugin({ src: resolve('./runtime/plugin'), mode: 'client' })

    addImports([
      ...['usePlausible'].map(key => ({
        name: key,
        as: key,
        from: resolve('./runtime/composables'),
      })),
    ])
  },
})

declare module '@nuxt/schema' {
  interface ConfigSchema {
    publicRuntimeConfig?: {
      plausible?: ModuleOptions
    }
  }
}
