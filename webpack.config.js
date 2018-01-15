var path = require('path');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
// var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {

  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { 
        test: /\.html$/,
        loaders: ['file-loader?name=[name].html', 'extract-loader', 'html-loader']
      }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin({
      paths: [
        '/pinstagram/'
      ]
    }),
    new HtmlMinifierPlugin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    }),
    // new CompressionPlugin({
    //   test: /\-raw.html/,
    //   include: /\/pinstagram/,
    //   filename (asset) {
    //     asset = 'pinstagram/index.html'
    //     return asset
    //   }
    // })
  ]

};