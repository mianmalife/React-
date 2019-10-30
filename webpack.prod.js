const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
// const TerserPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = merge(common, {
  mode: 'production',
  // optimization: {
  //   minimizer: [new TerserPlugin({})],
  // },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name][hash:6].css',
      chunkFilename: '[id][hash:6].css',
    }),
    new optimizeCssAssetsWebpackPlugin({}),
    // new BundleAnalyzerPlugin({ 
    //   analyzerMode: 'disabled',
    //   generateStatsFile: true,
    //   statsOptions: { source: false }
    //  })
  ]
});