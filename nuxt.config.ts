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
      { name: 'useStoreHistory', from: '@/stores/history' },
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
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],
  tailwindcss: {
    viewer: false
  }
})
