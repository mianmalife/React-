const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production'
console.log(devMode)
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    entry: [resolve('src')],
    output: {
        path: resolve('dist'),
        filename: '[name][hash:6].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: resolve('src'), // 精确指定要处理的目录
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
                test: /\.(png|jpg|gif|jpeg)$/,
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
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]-[hash:6].[ext]',
                        outputPath: 'fonts/',
                        limit: 5000,
                    }
                },
            }
        ]
    },
    performance: {
        hints: false
    },
    optimization: {
        splitChunks: {
            chunks: "all",    // 只对异步引入代码起作用，设置all时并同时配置vendors才对两者起作用
            minSize: 30000,   // 引入的库大于30kb时才会做代码分割
            minChunks: 1,     // 一个模块至少被用了1次才会被分割
            maxAsyncRequests: 5,     // 同时异步加载的模块数最多是5个，如果超过5个则不做代码分割
            maxInitialRequests: 3,   // 入口文件进行加载时，引入的库最多分割出3个js文件
            automaticNameDelimiter: '~',  // 生成文件名的文件链接符
            name: true,   // 开启自定义名称效果
            cacheGroups: {  // 判断分割出的代码放到那里去
                vendors: {   // 配合chunks： ‘all’使用，表示如果引入的库是在node-modules中，那就会把这个库分割出来并起名为vendors.js
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    filename: 'vendors.js'
                },
                default: {  // 为非node-modules库中分割出的代码设置默认存放名称
                    priority: -20,
                    reuseExistingChunk: true, // 避免被重复打包分割
                    filename: 'common.js'
                }
            }
        }
    },
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'react-router-dom': 'window.ReactRouterDOM',
        'redux': 'window.Redux',
        'react-redux': 'window.ReactRedux',
        'redux-thunk': 'window.ReduxThunk',
        'antd': 'window.antd'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'test',
            template: resolve('src') + '/index.html'
        }),
        new ProgressBarPlugin({
            clear: false
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name][hash:6].css',
        })
    ]
}