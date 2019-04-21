//index.js 服务启动文件
var express = require('express')

var app = express()

// let { Nuxt, Builder } = require('nuxt');

//nuxt的配置文件
// let config = require('./nuxt.config.js');
// let nuxt = new Nuxt(config);

app.get('/api', function (req, res) {
    res.send({msg: 'hello world !'})
})

// 是否启用开发模式
// if (config.dev) {
//     let builder = new Builder(nuxt);
//     builder.build();
// }

//自己定义的路由写它上边
// app.use(nuxt.render);

app.listen(3000, function () {
    console.log('http://localhost:3000')
});