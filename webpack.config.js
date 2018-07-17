const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: [
      path.join(__dirname, 'src/index.js')
    ]
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.css/,
        use: "css-loader"
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
      chunks: ['index']
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    inline: true,
    historyApiFallback: true,
  }
};