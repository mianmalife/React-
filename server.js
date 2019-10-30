const express = require('express');
const webpack =  require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.dev.js');
const compiler = webpack(config);

config.entry.push('webpack-hot-middleware/client?noInfo=true&reload=true')

// 告诉 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

// 使用静态资源目录，才能访问到/dist/idndex.html
app.use(express.static(config.output.path))

app.listen(3000, function() {
    console.log('server is listening on port 3000!');
})