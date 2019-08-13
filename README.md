# 项目名称 

> Nuxt-Vue

## 构建步骤

``` bash
# 安装依赖
$ npm install

# 前端环境启动 localhost:3000
$ npm run dev

# 前后端整体环境启动 localhost:3000
$ npm server

# 构建项目
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## 项目结构
```
├── .nuxt               # 构建输出路径
├── api                 # 接口请求
├── assets              # 主题，字体等静态资源
├── components          # 全局公用组件
├── download            # 下载文件
├── icons               # 所有 svg icons
├── layouts             # 全局 layout
├────── default.vue     # 默认布局
├── middleware          # 中间件
├── node_modules        # 所有依赖包
├── pages               # pages 所有页面
├────── index.vue       # 首页
├── plugins             # 第三方插件
├────── axios.js        # http 请求配置
├────── element-ui.js   # Element-UI 引入配置
├────── router.js       # 全局路由配置
├────── cookie.js       # Cookie 配置
├── server              # 服务端代码
├────── router          # 服务端路由配置
├────── index.js        # 服务端基础配置
├── static              # 静态资源
├── store               # 全局 Store 管理
├────── modules         # 模块管理
├────── getters.js      # 属性管理
├────── index.js        # Store 基础配置
├── styles              # 全局样式
├── upload              # 上传文件
├── utils               # 全局公用方法
├────── auth.js         # 公用方法
├─── test               # 集成测试 | 单元测试
├── .editorconfig       # 编辑器配置
├── .env.development    # 运行环境变量
├── .env.production     # 开发环境变量
├── .gitignore          # 文件过滤
├── nuxt.config.js      # nuxt 基础配置
├── package.json        # 版本配置项
└── README.md           # 项目说明
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
