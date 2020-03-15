# op-abm-web

> op-abm-web

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 管理平台前端-项目规范  参照 vue-element-admin 项目规范 

## 初始化步骤
vue init webpack op-abm-web 

npm install --registry=https://registry.npm.taobao.org
 

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix

## sit 环境效果
npm run sit   



## 重要知识点 
## vue-cli-service机制
https://segmentfault.com/a/1190000020338771  

Vue CLI 3是如何加载main.js 
https://blog.csdn.net/m0_37617778/article/details/86325402

## vue.config.js 详解
https://www.jianshu.com/p/ec6a4d6166ab

## vue-cli如何添加多种环境变量 
https://www.cnblogs.com/sinosaurus/p/10294399.html

## 标准添加 mock 姿势 
https://blog.csdn.net/weixin_33815613/article/details/88027401
https://blog.csdn.net/weixin_33815613/article/details/88027401
分环境解决方案
https://blog.csdn.net/qq_41009742/article/details/90613114

## vue-cli-service build 环境设置  
https://blog.csdn.net/linbenjian/article/details/85261201?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task




## 接口方案
引入网关是一个非常不错的方案，网关可以给不同的应用提供服务  网关整合认证权限模块 前后端分离 
提供不同环境的网关 
网关地址/所属模块/具体接口 


## 登录权限设计  
手摸手，带你用vue撸后台 系列二(登录权限篇) 
https://juejin.im/post/591aa14f570c35006961acac
https://blog.csdn.net/sky1679/article/details/90905198 
token是用户登录时后端返回的，可以存在localstorage中，而role是必须要时刻请求的，不能缓存，毕竟如果一个普通用户也有token，
它要是自己把localstorage里的role从普通用户改成了admin，这就会引起大麻烦。 


## 