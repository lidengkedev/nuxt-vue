//index.js 服务启动文件
var express = require('express')
const path = require('path')
const fs = require('fs')
var bodyParser = require("body-parser")

var app = express()
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
    next();
});

// let { Nuxt, Builder } = require('nuxt');

//nuxt的配置文件
// let config = require('./nuxt.config.js');
// let nuxt = new Nuxt(config);

app.get('/api', function (req, res) {
    console.log(req.query)
    res.send({msg: 'hello world !',query: req.query, params: req.params, body: req.body})
})

app.post('/api/post', function (req, res, next) {
    console.log(req.body)
    res.send({msg: 'this is post method /api/post', query: req.query, params: req.params, body: req.body})
    next();
})

// 文件下载
app.get('/api/download/file', function(req, res) {
    // res.setHeader('Content-Type', 'application/octet-stream;charset=utf-8')
    res.setHeader('Content-Type', 'application/x-xls')
    // res.setHeader('Content-Type', 'application/vnd.ms-excel; charset=utf-8')
    res.setHeader('Content-Disposition', 'attachment; filename=' + encodeURIComponent('供应商商品批量导入模板.xls'))
    const data = fs.readFileSync('./download/excel/供应商商品批量导入模板.xls')
    console.table(data)
    res.send(data)
    // res.sendFile(path.resolve(__dirname, 'download/excel/供应商商品批量导入模板.xls'))
})
// 是否启用开发模式
// if (config.dev) {
//     let builder = new Builder(nuxt);
//     builder.build();
// }

//自己定义的路由写它上边
// app.use(nuxt.render);

app.listen(4000, function () {
    console.log('http://localhost:4000')
});