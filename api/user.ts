import axios from 'axios'

// 登录
export const login = (params: any) => axios.post('/api/login', params)
// 图片验证码
export const captcha = (params: any) => axios.get('/api/captcha', { params })
