import Vue from 'vue'
import http from '../axios'

const install = function(Vue, options) {
    Vue.http = http
    Vue.prototype.$http = http
}

Vue.use(install)