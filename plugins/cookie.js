import Vue from 'vue'
import VueCookie from 'vue-cookie'

Vue.use(VueCookie)

const keyToken = 'token'

// 设置 token
export function setToken(token) {
    if (process.client) {
        const date = new Date()
        date.setDate(date.getDate() + 1)
        Vue.cookie.set(keyToken, token, { expires: date.toGMTString(), domain: 'localhost' })
    }
}

// 获取 token
export function getToken() {
    if (process.client) {
        return Vue.cookie.get(keyToken)
    }
}

// 移除 token
export function removeToken() {
    if (process.client) {
        Vue.cookie.delete(keyToken)
    }
}
