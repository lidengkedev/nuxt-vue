<template>
  <div class="app-container">
    <i-tabs :tabs="tabs" :width="100" @on-click="tabsClick">
      <p v-for="(item, index) in list" :key="index">{{ item.name }}</p>
    </i-tabs>
  </div>
</template>

<script>
import ITabs from '@/components/Tabs/Tab'
export default {
  components: { ITabs },
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
        { id: 11, name: '老十四' },
        { id: 11, name: '老十五' },
        { id: 11, name: '老十六' },
        { id: 11, name: '老十七' },
        { id: 11, name: '老十八' },
        { id: 11, name: '老十九' },
        { id: 11, name: '老二十' },
        { id: 11, name: '老二十一' },
        { id: 11, name: '老二十二' },
        { id: 11, name: '老二十三' }
      ]
    }
  },
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    return {
      title: 'Tabs',
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
        { id: 11, name: '老十四' },
        { id: 11, name: '老十五' },
        { id: 11, name: '老十六' },
        { id: 11, name: '老十七' },
        { id: 11, name: '老十八' },
        { id: 11, name: '老十九' },
        { id: 11, name: '老二十' },
        { id: 11, name: '老二十一' },
        { id: 11, name: '老二十二' },
        { id: 11, name: '老二十三' }
      ]
    }
  },
  head() {
    return {
      title: 'Tabs 示例',
      meta: [
        { hid: 'desctiption', name: 'descripttion', content: 'My custom description' }
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