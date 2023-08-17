import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from "vite-svg-loader"

export default defineNuxtConfig({
  modules: [
    'nuxt-windicss',
  ],
  buildModules: [
    '@nuxtjs/google-fonts',
    '@morev/vue-transitions/nuxt',
  ],
  css: [
    "/assets/fonts.css",
  ],
  googleFonts: {
    families: {

    }
  },
  vueTransitions: {
    // The same options as in the plugin itself.
    // You will get an autocomplete using Nuxt 3.
  },
  vite: {
    plugins: [svgLoader()]
  },
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets'
  }
})

