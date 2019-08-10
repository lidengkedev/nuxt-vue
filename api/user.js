import axios from '~/plugins/axios'

// 登录
export const login = params => axios.post('/api/login', params)
// 图片验证码
export const captcha = params => axios.get('/api/captcha', { params })
