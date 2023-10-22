// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
  modules: [
    'nuxt-aos'
  ],
  plugins: [{ src: '~/plugins/aos.js', mode: 'client' }],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_colors.scss";',
        }
      }
    },
  }
})
