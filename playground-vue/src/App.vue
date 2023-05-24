<script setup lang="ts">
import { usePlausible } from 'v-plausible/vue'

const { trackEvent } = usePlausible()
</script>

<template>
  <div>
    Nuxt module playground!
    <button @click="trackEvent('nuxt')">
      click me
    </button>
  </div>
</template>
