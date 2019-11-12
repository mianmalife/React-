const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  optimization: {   //剔除掉一个文件中未被引用掉部分
    usedExports: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});