import colors from 'vuetify/es5/util/colors'
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
   bridge:{
     meta: true
   },

  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    titleTemplate: "%s | Gamatrain",
    title: "Learning together, earning together, building a brighter future",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"},
      {hid: "description", name: "description", content: "Big training platform"},
      {name: "format-detection", content: "telephone=no"},
    ],
    link: [
      {rel: "stylesheet", href: "/assets/css/fontawesome.min.css"},
      {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
      {rel: "stylesheet", href: "/assets/css/video-js.css"},
      {rel: "stylesheet", href: "/assets/css/all.min.css"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Merriweather&display=swap"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=PT+Sans&display=swap"},
    ],
    script: [
      {src: 'https://accounts.google.com/gsi/client', defer: true, async: true},
      // {src: './assets/js/jquery.js', body: true},
      // {src: './assets/js/video.min.js', body: true},
    ],
  },

  generate: {
    routes: [
      '/'
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/gama6/styles.css",
    "@/assets/scss/app.scss",
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: 'plugins/vee-validate.js', ssr: true},
    {src: 'plugins/axios.js'},
    {src: 'plugins/helper.js'},
    {src: 'plugins/vue-emoji-picker', ssr: false},
    {src: 'plugins/img-cropper', ssr: false},
    {src: 'plugins/vuedraggable', ssr: false},
    {src: 'plugins/vuex-persist', ssr: false},

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    // "@nuxt/typescript-build",
    'nuxt-leaflet',
    // https://go.nuxtjs.dev/vuetify
    ["@nuxtjs/vuetify"],
    '@nuxtjs/dotenv',
    '@nuxtjs/moment',
    '@nuxtjs/pwa'

    // '@nuxtjs/onesignal',
  ],

  // oneSignal: {
  //   init: {
  //     appId: '782b76df-8189-482c-9047-1070af2d4a74',
  //     allowLocalhostAsSecureOrigin: true,
  //     welcomeNotification: {
  //       disable: true
  //     }
  //   }
  // },


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-material-design-icons',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/auth-next',
    '@nuxtjs/markdownit',
    'cookie-universal-nuxt'
  ],

  axios: {
    proxy: false,
    baseUrl: process.env.API_BASE_URL,
    headers: {}
  },

  proxy: {
    '/api/v1/': {
      target: process.env.API_BASE_URL,
      pathRewrite: {'^/api/v1/': '/api/v1/'},
      secure: false,
      changeOrigin: true
    },
    '/uploads/': {
      target: process.env.API_BASE_URL,
      pathRewrite: {'^/uploads': '/uploads'},
      secure: false,
      changeOrigin: true
    },
  },


  router: {
    middleware: ['auth']
  },

  auth: {
    strategies: {
      // google: {
      //   clientId: process.env.GOOGLE_CLIENT_Id,
      //   redirectUri: process.env.GOOGLE_REDIRECT_URI,
      //   codeChallengeMethod: '',
      //   responseType: 'code',
      //   grantType: 'google',
      //   endpoints: {
      //     token: '/api/google_login',
      //     userInfo: '/api/user'
      //   },
      //   user: {
      //     property: 'user',
      //     autoFetch: false
      //   }
      // },
      local: {
        token: {
          property: 'jwtToken',
          global: true,
        },
        endpoints: {
          login: {url: '/api/v1/users/login', method: 'post'},
          refresh: {url: '/api/v1/users/refresh_token', method: 'post'},
          user: false,
          logout: {url: '/api/v1/users/logout', method: 'get'}
        }
      }
    },
    redirect: {
      login: '/?access=denied',
      logout: '/',
      callback: false,
      home: '/'
    }
  },

  toast: {
    position: 'top-center',
    duration: 3000,
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    defaultAssets: false,
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
    icons: {
      iconfont: 'mdi',
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate", "vue-chartjs","ofetch","node-fetch-native","defu"],
  },

  pwa: {
    manifest: {
      name: 'Gamatrain App',
      short_name: 'Gamatrain',
      description: 'Big training platform',
      lang: 'en',
      useWebmanifestExtension: false
    }
  },

  server: {
    host: "0.0.0.0",
    port: 3002
  }
});
