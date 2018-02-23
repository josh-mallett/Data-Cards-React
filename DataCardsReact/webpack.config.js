var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry : APP_DIR + '/index.js',
  output : {
    path : BUILD_DIR,
    filename : 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        loader : 'babel-loader',
        include : APP_DIR,
        exclude : '/node-modules'
      },
      {
        test : /\.sass?/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  plugins : [
    new ExtractTextPlugin('styles/main.css', {
      allchunks : true
    })
  ]
};

module.exports = config;
