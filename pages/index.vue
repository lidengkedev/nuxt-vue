<template>
    <section>
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
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
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    color: #FFF;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
