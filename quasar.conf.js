// Configuration for your app

const result = require('dotenv').config('.env');

module.exports = ctx => (
  {
    // app plugins (/src/plugins)
    plugins: [
      'i18n',
      'axios',
    ],
    css: [
      'app.styl',
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons',
      // 'ionicons',
      // 'mdi',
      // 'fontawesome'
    ],
    supportIE: true,
    vendor: {
      add: [],
      remove: [],
    },
    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      env: {
        ELECTRON_API_URL: `'${result.parsed.ELECTRON_API_URL}'`,
      },
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      // useNotifier: false,
      extendWebpack(cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|quasar)/,
        });
      },
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true, // opens browser window automatically
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
      },
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      components: [
        'QLayout',
        'QPageContainer',
        'QLayoutDrawer',
        'QPage',
        'QTabs',
        'QRouteTab',
        'QLayoutHeader',
        'QList',
        'QItem',
        'QItemSide',
        'QItemMain',
        'QField',
        'QInput',
        'QBtn',
        'QInnerLoading',
      ],
      directives: [
        'Ripple',
      ],
      // Quasar plugins
      plugins: [
        'Notify',
      ],
    },
    // animations: 'all' --- includes all animations
    animations: [
    ],
    pwa: {
      cacheExt: 'js,html,css,ttf,eot,otf,woff,woff2,json,svg,gif,jpg,jpeg,png,wav,ogg,webm,flac,aac,mp4,mp3',
      manifest: {
        name: 'Maps RPG',
        short_name: 'Maps RPG',
        description: 'Maps RPG',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'statics/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'statics/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'statics/icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'statics/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'statics/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    cordova: {
      id: 'com.kpwbo.maps-rpg',
    },
    electron: {
      extendWebpack() {
        // do something with cfg
      },
      packager: {
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      },
    },

    // leave this here for Quasar CLI
    starterKit: '1.0.0',
  }
);
