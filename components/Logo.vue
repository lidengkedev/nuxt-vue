<template>
    <div class="container">
        <h1>{{ name }}</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            name: 'Hello World !'
        }
    },
    asyncData (context) {
        return {
            name: 'Hello World !'
        }
    },
    fetch ({ store, params }) {
        return axios.get('http://my-api/stars').then((res) => {
            store.commit('setStars', res.data)
        })
    },
    head: {
        title: 'title',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    layout (context) {
        return 'blog'
    },
    loading: true,
    transition (to, from) {
        if (!from) return 'slide-left'
        return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
    },
    scrollToTop: true,
    validate ({ params }) {
        // 必须是number类型
        return /^\d+$/.test(params.id)
    },
    middleware () {}
}
</script>

<style scope="this api replaced by slot-scope in 2.5.0+">
.container h1 {
    text-align: center;
    color: #fff;
    background-color: #000;
}
</style>
