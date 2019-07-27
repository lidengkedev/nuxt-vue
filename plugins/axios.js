import Axios from 'axios'

const options = {
    // baseUrl: 'http://localhost:4000',
    timeout: 5000
}

if (process.server) {
    options.baseUrl = 'http://localhost:3000'
}

// 生成一个axios对象实例
const axios = Axios.create(options)

// 请求配置
axios.interceptors.request.use(
    config => {
        // config.headers.common['token'] = window.localStorage.getItem('token') || ''
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// 返回数据处理
axios.interceptors.response.use(
    response => {
        if (response.config.responseType === 'arraybuffer') {
            return response
        }
        const data = response.data
        if (data.status !== 1) {
            alert(data.message)
        } else {
            return data
        }
    },
    err => {
        return Promise.reject(err)
    }
)
export default axios
