# Plausible Vue 

![Nuxt Typescript Bundle Template](https://github.com/productdevbookcom/v-plausible/blob/main/.github/assets/plausible-vue.png?raw=true)

<p>
      <a href="https://www.npmjs.com/package/v-plausible"><img src="https://img.shields.io/npm/v/v-plausible.svg?style=flat&colorA=002438&colorB=28CF8D" alt="Version"></a>
      <a href="https://www.npmjs.com/package/v-plausible"><img src="https://img.shields.io/npm/dm/v-plausible.svg?style=flat&colorA=002438&colorB=28CF8D" alt="Downloads"></a>
      <a href="./LICENSE"><img src="https://img.shields.io/github/license/productdevbookcom/v-plausible.svg?style=flat&colorA=002438&colorB=28CF8D" alt="License"></a>
      <a href="https://github.com/productdevbookcom/v-plausible">
      <img src="https://img.shields.io/github/stars/productdevbookcom/v-plausible.svg?style=social&label=Star&maxAge=2592000" alt="Github Stars"> </a>
</p>


This module huntersofbook team created.

> [Plausible](https://plausible.io/docs) integration for [Nuxt](https://nuxtjs.org)

## Features

- Zero-config required
- Auto-import composables usePlausible()

## Setup
```
pnpm add v-plausible
```
```
yarn add v-plausible
```
```
pnpm add v-plausible
```

## Usage Vue 3

```ts
import { createPlausible } from 'v-plausible/vue'

const plausible = createPlausible({
  init: {
    domain: 'domain.com',
    apiHost: 'https://host.com',
    trackLocalhost: true,
  },
  settings: {
    enableAutoOutboundTracking: true,
    enableAutoPageviews: true,
  },
  partytown: false,
})

app.use(plausible)
```

### Nuxt Config

```ts
export default defineNuxtConfig({
  modules: [
    '@huntersofbook/v-plausible'
  ],
  plausible: {
    init: {
      domain: 'localhost',
      apiHost: 'https://site.com',
      trackLocalhost: true
    },
    // If this is loaded you can make it true, https://github.com/nuxt-modules/partytown
    partytown: false,
  }
})
```

### Composables

```vue
<script setup lang="ts">
const { trackEvent } = usePlausible()
</script>

<template>
  <div>
    <button @click="trackEvent('nuxt')">
      click me
    </button>
  </div>
</template>
```

```vue
<script setup lang="ts">
const { trackPageview } = usePlausible()
</script>
```


## Init Default

`Plausible()` accepts some [options](https://plausible-tracker.netlify.app/globals.html#plausibleinitoptions) that you may want to provide:

| Option         | Type     | Description                                                       | Default                  |
| -------------- | -------- | ----------------------------------------------------------------- | ------------------------ |
| domain         | `string` | Your site's domain, as declared by you in Plausible's settings    | `location.hostname`      |
| hashMode       | `bool`   | Enables tracking based on URL hash changes.                       | `false`                  |
| trackLocalhost | `bool`   | Enables tracking on *localhost*.                                  | `false`                  |
| apiHost        | `string` | Plausible's API host to use. Change this if you are self-hosting. | `'https://plausible.io'` |

## Settings Default

| Option         | Type     | Description                                                       | Default                  |
| -------------- | -------- | ----------------------------------------------------------------- | ------------------------ |
| enableAutoPageviews | `bool` | Your site's domain, as declared by you in Plausible's settings    | `true`      |
| enableAutoOutboundTracking       | `bool`   | Enables tracking based on URL hash changes.                       | `false`                  |


## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- Install dependencies using `pnpm install`
- Stub module with `pnpm dev:prepare`
- Run `pnpm dev` to start [playground](./playground) in development mode

## License

MIT License © 2022-PRESENT [productdevbook](https://github.com/productdevbook)


## 💚 Credits

Nuxt 3 Plugin [danielroe](https://github.com/danielroe)

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/oku-ui/static/sponsors/sponsors.svg">
    <img alt="sponsors" src='https://cdn.jsdelivr.net/gh/oku-ui/static/sponsors/sponsors.svg'/>
  </a>
</p>


## License

This project is licensed under the [MIT License](LICENSE).
