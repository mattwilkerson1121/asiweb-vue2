var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

new BrowserSyncPlugin({
  host: 'localhost',
  port: 3000,
  proxy: 'http://localhost:8080'
  }, {
    reload: false
})
