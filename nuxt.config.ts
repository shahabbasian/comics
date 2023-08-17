// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Comics Character',
    }
  },
  devtools: { enabled: true },
  imports: {
    imports: [
      { name: 'md5', from: 'crypto-js/md5' }
    ]
  },
  runtimeConfig: {
    public: {
      apiSecret: process.env.NUXT_API_SECRET,
      apiBase: process.env.NUXT_API_BASE,
      apiKey: process.env.NUXT_API_KEY
    }
  },
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
