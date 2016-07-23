'use strict'
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
config.entry.unshift('webpack-dev-server/client?http://localhost:8080', "webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());

// 这里配置：请求http://localhost:8080/api，
// 相当于通过本地node服务代理请求后台服务器了http://cn.vuejs.org/api
var proxy = [{
    path: "/api/*",
    target: "http://cn.vuejs.org/",
    secure: false
}]

//启动服务
var app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot:true,
    historyApiFallback: true,
    proxy:proxy,
    stats: { colors: true}  //打包输出时带颜色
});
app.listen(8080);