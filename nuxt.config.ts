// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [],
  plugins: [],
  modules: [],
  vue: {},
  router: {},
  build: {},
  dev: process.env.NODE_ENV !== 'production',
  devServer: {},
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
})
