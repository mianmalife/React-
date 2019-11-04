const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new optimizeCssAssetsWebpackPlugin({}),
    // new BundleAnalyzerPlugin()
  ]
});