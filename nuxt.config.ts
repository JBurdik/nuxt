// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-lucide-icons', '@vueuse/nuxt'],
  components: [
    {
      path: '~/components/ui',
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
      // prefix for your components, eg: UiButton
      prefix: 'Ui'
    },
    { path: '~/components' }
  ],
  plugins: [{ src: '~/plugins/prisma.ts', mode: 'server' }],
  lucide: {
    namePrefix: 'Icon'
  }
})
