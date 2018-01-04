const axios = require('axios')
/*
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: 'http://mattwilkerson1121.github.io/asiweb-vue'
  }
}
"build:gh-pages": "DEPLOY_ENV=GH_PAGES nuxt build",
"generate:gh-pages": "DEPLOY_ENV=GH_PAGES nuxt generate",
"deploy": "push-dir --dir=dist --branch=master --cleanup"
*/
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mynuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'stylesheet', href: '../Content/ValueCityMix/styles/asi-bootstrap.min.css'},
      { rel: 'stylesheet', href: '../Content/ValueCityMix/styles/styles.css' },
      { rel: 'stylesheet', href: '../Content/ValueCityMix/less/ValueCityMix.min.css' },
      { rel: 'stylesheet', href: '../Content/ValueCityMix/less/bottom.css' },
      { rel: 'icon', type: 'image/x-icon', href: '../Content/ValueCityMix/images/icons/favicon.ico' }
    ]
  },
  css: [
    // Load project dependent CSS files
    // SCSS file in the project
    '@/assets/css/asi-styles.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios'],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    storyblok: {
      token: 'uiNOnVb8nT1xfkF1fNrSdAtt'
    }
  },
  generate: {
    routes: function () {
      return axios.get('https://api.storyblok.com/v1/cdn/links?version=published&token=uiNOnVb8nT1xfkF1fNrSdAtt')
      .then((result) => { 
        let pages = []
        for (let link in result.data.links) {
          if (result.data.links.hasOwnProperty(link)) {
            pages.push('/' + result.data.links[link].slug)
          }
        }
        return pages
      })
      .catch((error) => {
        return error
      })
    }
  },
  plugins: [
    '~/plugins/components.js',
    '~/plugins/storyblok_bridge.js'
  ]
}
