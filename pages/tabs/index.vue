<template>
  <div class="app-container">
    <i-tabs :tabs="tabs" :width="100" @on-click="tabsClick">
      <p v-for="(item, index) in list" :key="index">{{ item.name }}</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
      <p>这是一个测试</p>
    </i-tabs>
  </div>
</template>

<script>
import ITabs from '@/components/Tabs/Tab'
export default {
  components: { ITabs },
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    // 
  },
  data() {
    return {
      tabs: ['Tabs 1', 'Tabs 2', 'Tabs 3', 'Tabs 4', 'Tabs 5', 'Tabs 6', 'Tabs 7'],
      list: [
        { id: 1, name: '张三' },
        { id: 2, name: '李四' },
        { id: 3, name: '王五' },
        { id: 4, name: '赵六' },
        { id: 5, name: '田七' },
        { id: 6, name: '老八' },
        { id: 7, name: '老九' },
        { id: 8, name: '老十' },
        { id: 9, name: '老十一' },
        { id: 10, name: '老十二' },
        { id: 11, name: '老十三' }
      ]
    }
  },
  methods: {
    tabsClick(value) {
      this.list = this.list.reverse()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>