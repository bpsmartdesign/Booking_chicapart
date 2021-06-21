export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Chicaparts Booking',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: '/js/jquery.min.js'},
      {src: '/js/map-single.js'},
      {src: '/js/plugins.js'},
      {src: '/js/scripts.js'}
      /*{src: '/js/map-add.js'},
      {src: '/js/mapplugins.js'},
      {src: '/js/maps.js'},
      {src: '/js/charts.js'},
      {src: '/js/dasboard.js'}*/
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/plugins.css',
    '@/assets/css/style.css',
    '@/assets/css/color.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
