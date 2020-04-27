//index.js 服务启动文件
const { Nuxt, Builder } = require('nuxt')
const express = require('express')
const bodyParser = require("body-parser")
const router = require('./router/index')

const port = process.env.PORT || 4000

const app = express()
// 这个很重要，一定要写在路由前面，否则post无法获取body的值，只能拿到{}
app.use(bodyParser.json())
// 这个也很重要，一定要转译，否则无法获取post参数，body的值为undefined
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

// 请求头配置
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept, Content-Type, XFILENAME, XFILECATEGORY, XFILESIZE");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    //  res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    req.header
    next();
});


// 传入配置初始化 Nuxt.js 实例
let config = require('../nuxt.config.js')
let nuxt = new Nuxt(config)

app.use('/api/123', function(req, res) {
    res.send('/api/123')
})

// 配置路由
app.use('/api', router)

// 针对一个路由不同方法的不同处理请求 这里为get和post两种不同的请求
app.route('/api/test').get(function(req, res) {
    res.send({
        status: 1,
        data: {
            path: '/api/test',
            method: 'get',
            params: req.query
        },
        message: 'success'
    })
}).post(function(req, res) {
    res.send({
        status: 1,
        data: {
            path: '/api/test',
            method: 'post',
            body: req.body
        },
        message: 'success'
    })
})

//自己定义的路由写它上边
app.use(nuxt.render);

// 在开发模式下进行编译
if (config.dev) {
    new Builder(nuxt).build()
}


app.listen(port, '0.0.0.0', function () {
    console.log(`http://localhost:${port}`)
});