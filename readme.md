##webpack+vuejs实现一个中大型单页移动应用
#### 项目特点
- 热加载/热替换（hotreload)
- 构建时文件带hash，方便版本控制
- sourceMap,方便调试
- CSS 样式独立文件
- 支持ES6
- 支持SASS
- 解决了数据请求跨域问题

#### 技术栈
- vue：MVVM前端框架 [查看api](http://cn.vuejs.org/api/ "查看api")
- vue-resource : 基于vue的ajax扩展 [使用文档](https://github.com/vuejs/vue-resource/blob/master/docs/http.md "使用文档")
- vue-router : 基于vue的路由扩展 [查看文档](http://router.vuejs.org/zh-cn/index.html "查看文档")
- webpack : 资源打包处理工具
- webpackdevserver: 基于webpack的开发服务器


#### 环境部署
1. 安装nodejs（版本6.2+）
[下载nodejs最新版](https://nodejs.org/en/ "下载nodejs")
2. 全局安装webpack
```
npm install webpack -g
```
3. 拷贝本项目
```
git clone git@github.com:tianyuwu/Vue-SPA-demo.git
```
4. 安装项目依赖
```
npm install
```

#### 开发
```
npm run dev
```

#### 打包发布
win平台
```
npm run wb
```
mac平台
```
npm run mb
```

#### 安装其他依赖
```
npm install package_name --save-dev
```