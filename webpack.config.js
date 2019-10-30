
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const webpack = require('webpack'); //访问内置的插件
module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name][hash:6].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader'] // 将 Less 编译为 CSS
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'test',
            template: './src/index.html'
        })
    ]
}