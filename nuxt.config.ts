// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Comics Character',
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    '@pinia/nuxt'
  ],
  tailwindcss: {
    viewer: false
  }
})
