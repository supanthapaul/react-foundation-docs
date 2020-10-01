var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/main.html'
    }),
  ]
}, require('./config'));
