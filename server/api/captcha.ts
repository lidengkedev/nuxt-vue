import svgCaptcha from 'svg-captcha'

export default defineEventHandler(event => {
  const captcha = svgCaptcha.create({
    size: 4, // 验证码长度
    ignoreChars: '1234567890', // 验证码字符中排除 1234567890
    noise: 1, // 干扰线条的数量
    color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
    background: '#cc9966' // 验证码图片背景颜色
  })
  return {
    code: 200,
    data: {
      img: captcha.data,
      text: captcha.text
    },
    message: 'success'
  }
})