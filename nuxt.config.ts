// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-lucide-icons'],
  plugins: [{ src: '~/plugins/prisma.ts', mode: 'server' }],
  lucide: {
    namePrefix: 'Icon'
  }
})
