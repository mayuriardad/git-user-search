const path = require('path');
var rootPath = path.join(__dirname, '../..');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: [
      './src/index.js'
    ]
  },
  output: {
    path: path.join(rootPath, '/dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query:
        {
          presets: ['react']
        }
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
  ],
  devServer: {
    // publicPath: "/assets/", // here's the change
    // contentBase: path.join(__dirname, 'public'),
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    inline: true,
    historyApiFallback: true,
  }
};