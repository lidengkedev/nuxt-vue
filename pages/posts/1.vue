<template>
  <nuxt-layout>
    <div>这是一个参数路由页面！</div>
  </nuxt-layout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
// 当访问/posts/1时，route.params.id将为1
// console.log(route.params.id)
</script>