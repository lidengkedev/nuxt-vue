const express = require('express')
const path = require('path')
const svgCaptcha = require('svg-captcha') // svg 图片验证码插件
const fs = require('fs') // 文件系统

// 生成路由实例
const router = express.Router()

// 图片验证码
router.get('/captcha', function(req, res, next) {
  const captcha = svgCaptcha.create({
    size: 4, // 验证码长度
    ignoreChars: '1234567890', // 验证码字符中排除 1234567890
    noise: 1, // 干扰线条的数量
    color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
    background: '#cc9966' // 验证码图片背景颜色
  })
  res.json({
    status: 1,
    data: {
      img: captcha.data,
      text: captcha.text
    },
    message: 'success'
  })
  next()
})

// 文件下载
router.get('/download/file', function(req, res, next) {
  res.setHeader('Content-Type', 'application/x-xls')
  res.setHeader('Content-Disposition', 'attachment; filename=' + encodeURIComponent('供应商商品批量导入模板.xls'))
  const data = fs.readFileSync('./download/excel/供应商商品批量导入模板.xls')
  res.send(data)
  next()
})

// 文件下载
router.get('/download/pdf', function(req, res, next) {
  const data = fs.readFileSync('./download/pdf/全栈增长⼯程师指南.pdf')
  res.send(data)
})

// 登录
router.post('/login', function(req, res) {
  const username = req.body.username
  const password = req.body.password
  if (username === 'admin' && password === '123456') {
    res.json({
      status: 1,
      data: {
        token: 'sdfhksdfaldfjalkdfalsdfadfjakld'
      },
      message: 'success'
    })
  } else {
    let message = 'error'
    if (username != 'admin') {
      message = '用户名不正确'
    } else if (password != '123456') {
      message = '密码不正确'
    }
    res.json({
      status: -1,
      data: {},
      message: message
    })
  }
})

module.exports = router