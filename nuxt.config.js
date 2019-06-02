import pkg from './package'

// eslint-disable-next-line no-unused-vars
const isDev = process.env.NODE_ENV === 'development'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: '挺韓 選總統 ｜ 後援網站',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        name: 'google-site-verification',
        content: 'TJKDeH5SB5WZD6Ispe3mTkWbxggXyMmx_YVnMjoE0xQ'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  manifest: {
    name: '挺韓 選總統 ｜ 後援網站',
    short_name: '挺韓 選總統',
    description: '台灣安全 人民有錢',
    lang: 'zh-TW',
    background_color: '#ff0000'
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-facebook-pixel-module',
      {
        disabled: isDev,
        pixelId: '2269239943320587'
      }
    ],
    '@nuxtjs/style-resources',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/google-gtag',
    '@nuxtjs/pwa'
  ],

  styleResources: {
    // :warning: You cannot use path aliases here (~ and @)
    scss: ['./assets/*.scss']
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  'google-gtag': {
    id: 'UA-141289431-1', // required
    debug: true, // enable to track in dev mode
    config: {
      // this are the config options for `gtag
      // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
      // send_page_view: false, // might be necessary to avoid duplicated page track on page reload
    }
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
