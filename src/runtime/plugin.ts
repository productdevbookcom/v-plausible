import { createPlausible } from '../vue'
import type { ReturnUsePlasuible } from '../vue'

import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const hob = createPlausible(config.public.plausible)
  nuxtApp.vueApp.use(hob)
  nuxtApp.provide(
    'plausible',
    nuxtApp.vueApp.config.globalProperties.$plausible,
  )
})

interface PluginInjection {
  $plausible: ReturnUsePlasuible
}

declare module '#app' {
  interface NuxtApp extends PluginInjection {}
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends PluginInjection {}
}
