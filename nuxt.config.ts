// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  imports: false,
  devtools: { enabled: true },
  experimental: {
    componentIslands: true
  }
})
