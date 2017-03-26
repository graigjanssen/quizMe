'use strict';


// Creates new index.html in build folder that will link to our react app entry point
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: 'eval-source-map',
  // Transform the following code
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, './app/index.js')
  ],
  // Resulting file from transformation
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  // How to transform
  module: {
    loaders: [
      // Use Babel to transform all js files in app folder
      {
        test: /\.js$/,
        include: __dirname + '/app',
        loader: 'babel-loader'
      },
      // For SASS
      {
        test: /\.css$/,
        include: path.join(__dirname, '/app'),
        loaders: ["style","css","sass"]
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}
