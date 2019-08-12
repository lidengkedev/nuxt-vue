<template>
    <section class="app-container">
        <h1>首页</h1>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'index',
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

</style>
