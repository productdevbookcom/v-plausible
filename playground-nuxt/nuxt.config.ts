export default defineNuxtConfig({
  modules: ['v-plausible'],
  plausible: {
    init: {
      domain: 'localhost',
      apiHost: 'https://site.com',
      trackLocalhost: true,
    },
    partytown: true,
  },
  typescript: {
    tsConfig: {
      include: [
        '../../tests/**/*.ts',
        '../../*.ts',
        '../../src/**/*.ts',
      ],
      compilerOptions: {
        paths: {
          '~/vue/*': [
            '../playground-vue/*',
          ],
          '~/vue': [
            '../playground-vue',
          ],
        },
      },
    },
  },
})
