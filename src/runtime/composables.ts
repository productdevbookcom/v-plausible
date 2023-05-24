import type { ReturnUsePlasuible } from '../vue'

import { useNuxtApp } from '#app'

export function usePlausible(): ReturnUsePlasuible {
  const plausible = useNuxtApp().$plausible
  return {
    ...plausible,
  }
}
