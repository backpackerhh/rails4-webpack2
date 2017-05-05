const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const jsOutputTemplate = 'javascripts/[name].js'
const cssOutputTemplate = 'stylesheets/[name].css'

module.exports = {
  context: path.join(__dirname, '/app/assets'),
  entry: {
    application: ['./javascripts/application.js', './stylesheets/application.scss']
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: jsOutputTemplate
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(['css-loader', 'resolve-url-loader'])
      },
      {
        test: /\.s(a|c)ss$/,
        use: ExtractTextPlugin.extract(['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'])
      },
      {
        test: /\.(woff2?|svg)$/,
        use: 'url-loader?limit=10000&name=/fonts/[name].[ext]'
      },
      {
        test: /\.(ttf|eot)$/,
        use: 'file-loader?name=/fonts/[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'url-loader?limit=10000&name=/images/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: cssOutputTemplate,
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      '$': 'jquery',
      'window.$': 'jquery',
      jQuery: 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      jquery: 'jquery',
      'jquery': 'jquery',
      'window.jquery': 'jquery'
    })
  ]
}
