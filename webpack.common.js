const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: '[name][hash:6].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'), // 精确指定要处理的目录
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    {
                        loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name][hash:6].[ext]',
                            outputPath: 'image/',
                            limit: 204800
                        },
                    },
                ]
            }
        ]
    },
    performance: {
        hints: false
    },
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'react-router-dom': 'window.ReactRouterDOM'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'test',
            template: './src/index.html'
        }),
        new ProgressBarPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode? '[name].css' : '[name][hash:6].css',
        })
    ]
}