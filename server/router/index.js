const express = require('express')
const commons = require('../modules/commons')

// 生成路由实例
const router = express.Router()

router.get('/captcha', commons.captcha) // 生成图片验证码
router.get('/download/file', commons.downLoadFile) // 文件下载
router.post('/login', commons.login)

module.exports = router