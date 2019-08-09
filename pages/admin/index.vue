<template>
    <section class="app-container">
        <div class="user-warpper">
            <img class="user-avator" :src="user_avator" alt="">
        </div>
    </section>
</template>

<script>
import { images } from '../../static/images.json'
export default {
    head: {
        title: '用户中心',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    data() {
        return {
            user_avator: images[0].user_varator
        }
    }
}
</script>

<style lang="scss" scoped>
.user-warpper {
    width: 80px;
    height: 80px;
    margin-left: auto;
    .user-avator {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        text-align: center;
        cursor: pointer;
    }
}
</style>