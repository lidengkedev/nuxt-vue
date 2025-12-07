<template>
  <header class="menu-inner">
    <NuxtLink
      v-for="(item, index) in menuList"
      :key="index"
      :to="item.url"
      class="menu-item"
    >{{ item.title }}</NuxtLink>
  </header>
</template>

<script setup>
import  { ref } from 'vue'
const menuList = ref([
  { title: '首页', url: '/' },
  { title: '关于', url: '/about' },
  { title: '登录', url: '/login' },
  { title: '带参路由', url: '/posts/1' },
  { title: '图书查询', url: '/books' },
])
</script>

<style scoped>
.menu-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px;
}
.menu-item {
  padding: 10px;
  margin-right: 10px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
}
</style>