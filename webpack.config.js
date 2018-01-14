var path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {

  entry: './pinstagram.js',

  output: {
    filename: 'index.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  plugins: [
    new StaticSiteGeneratorPlugin({
      paths: [
        '/pinstagram/'
      ]
    })
  ]

};