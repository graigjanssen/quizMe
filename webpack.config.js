// Creates new index.html in build folder that will link to our react app entry point
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  // Transform the following code
  entry: [
    './app/index.js'
  ],
  // Resulting file from transformation
  output: {
    path: __dirname + "/dist",
    filename: 'index_bundle.js'
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
        include: __dirname + '/app',
        loaders: ["style","css","sass"]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
