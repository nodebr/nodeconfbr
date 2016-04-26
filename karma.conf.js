'use strict'

let webpackConfig = require('./webpack.dev.js')
delete webpackConfig.entry

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    files: ['test/index.js'],
    reporters: ['mocha'],
    preprocessors: {
      'test/index.js': ['webpack']
    },
    client: {
      mocha: { ui: 'bdd' }
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true },
    singleRun: true
  })
}
