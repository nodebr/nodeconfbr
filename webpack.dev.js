'use strict'

module.exports = {
  entry: './components/app.js',
  output: {
    path: `${__dirname}/public/assets/js`,
    filename: 'app.js',
    publicPath: '/assets/js/'
  },
  resolve: {
    alias: {
      joi: 'joi-browser'
    }
  },
  externals: {
    'jquery': 'jQuery'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}
