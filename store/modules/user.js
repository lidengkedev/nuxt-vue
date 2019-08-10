import { login } from '@/api/user'

const state = {
    token: '',
    username: '',
    userid: '',
    avator: '',
    mobile: ''
}
const mutations = {
    // 设置 token
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    // 设置 用户名
    SET_USERNAME: (state, username) => {
        state.username = username
    },
    // 设置 用户ID
    SET_USERID: (state, userid) => {
        state.userid = userid
    },
    // 设置 用户头像
    SET_AVATOR: (state, avator) => {
        state.avator = avator
    },
    // 设置 用户手机号
    SET_MOBILE: (state, mobile) => {
        state.mobile = mobile
    }
}
const actions = {
    // 用户登录
    login({ commit }, loginFrom) {
        const { username, password, captcha } = loginFrom
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password, captcha }).then(res => {
                const data = res.data
                commit('SET_TOKEN', data.token)
                commit('SET_USERNAME', data.username)
                commit('SET_USERID', data.userId)
                commit('SET_AVATOR', data.avator)
                commit('SET_MOBILE', data.mobile)
                resolve(res)
            }).catch(err => reject(err))
        })
    },
    // 用户登出
    logout({ commit }) {
        commit('SET_TOKEN', '')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}