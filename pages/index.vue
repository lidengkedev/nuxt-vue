<template>
    <section class="container">
        <nuxt-link class="nuxt-link" to="/admin">首页</nuxt-link>
        <nuxt-link class="nuxt-link" to="/animation">动画</nuxt-link>
        <nuxt-link class="nuxt-link" to="/download/excel">下载Excel</nuxt-link>
        <nuxt-link class="nuxt-link" to="/error/404">404</nuxt-link>
        <nuxt-link class="nuxt-link" to="/login">登录</nuxt-link>
        <nuxt-link class="nuxt-link" to="/tabs">Tabs</nuxt-link>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    components: {},
    head: {
        title: '首页',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', name: 'description', content: '这个一个首页' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    created() {
        this.getTest()
        this.postTest()
    },
    methods: {
        getTest() {
            axios.get('http://localhost:3000/api/test', {
                a: 1,
                b: '这是一个参数'
            }).then(res => {
                console.log(res.data)
            }).catch(err => console.log(err))
        },
        postTest() {
            axios.post('http://localhost:3000/api/test', {
                post: 'post',
                messgae: '这是一个post请求'
            }).then(res => {
                console.log(res.data)
            }).catch(err => console.log(err))
        }
    }
}
</script>

<style lang="scss" scoped>
.nuxt-link {
    width: 100px;
    display: inline-block;
    text-align: center;
    padding: 5px 10px;
    border: 1px solid #eaeaea;
    transition-duration: .3s;
}
.nuxt-link:hover {
    color: #FFF;
    background-color: #52ccba;
}
</style>
