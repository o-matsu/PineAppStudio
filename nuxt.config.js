export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PineAppStudio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/icon-192x192.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/favicons/apple-touch-icon-180x180.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          ABeeZee: true,
          Oswald: true,
          Kosugi: true,
        },
        display: 'swap',
      },
    ],
[
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyALtv-oBN98kk0G2n0vJZnNSv9Gb6b-js4',
          authDomain: 'myhp-pineappstudio.firebaseapp.com',
          projectId: 'myhp-pineappstudio',
          storageBucket: 'myhp-pineappstudio.appspot.com',
          messagingSenderId: '1049431691570',
          appId: '1:1049431691570:web:129d532825ff5f8529072b',
          measurementId: 'G-TLQ4XDQJMX',
        },
        services: {
          analytics: {
            collectionEnabled: true,
          },
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    dir: 'public',
  },
}
