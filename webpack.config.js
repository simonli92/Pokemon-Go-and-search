var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname , '/dist'),
    publicPath: "/",
    filename: "index_bundle.js"
  },
  resolve: {
    extensions: ["",".js"]
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, loader:'style-loader!css-loader'},
      {test: /\.(jpg|png)$/, loader:'file-loader'}
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};