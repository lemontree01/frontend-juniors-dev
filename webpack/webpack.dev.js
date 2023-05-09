const path = require("path")
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "../build"),
    },
    hot: true,
    port: 8081,
    open: true,
  },
})