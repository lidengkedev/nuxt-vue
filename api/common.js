import axios from '~/plugins/axios'

// Excel文件下载
export function DownLoadExcelApi(data) {
    return axios({
        method: 'get',
        url: '/api/download/file',
        responseType: 'arraybuffer',
        params: data
    })
}

// 获取图片验证码
export function Captcha() {
    return axios({
        method: 'get',
        url: '/api/captcha'
    })
}

// 登录
export function Login(data) {
    return axios({
        method: 'post',
        url: '/api/login',
        data
    })
}