export default defineNuxtConfig({
  modules: ['../src/module'],
  myModule: {},
  typescript: {
    tsConfig: {
      include: [
        '../../tests/**/*.ts',
        '../../*.ts',
        '../../src/**/*.ts',
      ],
    },
  },
})
