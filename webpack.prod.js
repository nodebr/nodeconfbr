'use strict'

let webpack = require('webpack')
let config = require('./webpack.dev.js')

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin()
]

module.exports = config
