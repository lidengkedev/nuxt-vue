<template>
  <div class="app-container">
    <div class="tabs-warpper">
      <section class="tabs-left">
        <ul class="tabs-title-warpper">
          <li class="tabs-title" v-for="item in tabs" :key="item.id" :class="{'tabs-title-active': item.id === currentIndex}" @click="tabsHandle(item.id)">
            <!-- <component :is="componentId"></component> -->
            {{ item.title }}
          </li>
          <!-- <li class="tabs-title">
            Tabs2
          </li>
          <li class="tabs-title">
            Tabs3
          </li>
          <li class="tabs-title">
            Tabs4
          </li>
          <li class="tabs-title">
            Tabs5
          </li>
          <li class="tabs-title">
            Tabs6
          </li> -->
        </ul>
      </section>
      <section class="tabs-right">
        <ul class="tabs-content-warpper">
          <li class="tabs-content">
            <a href="javascript:void(0);" class="user-name" v-for="item in list" :key="item.id">{{ item.name }}</a>
          </li>
          <!-- <li class="tabs-content">
            Content 1
          </li>
          <li class="tabs-content">
            Content 2
          </li>
          <li class="tabs-content">
            Content 3
          </li>
          <li class="tabs-content">
            Content 4
          </li>
          <li class="tabs-content">
            Content 5
          </li>
          <li class="tabs-content">
            Content 6
          </li> -->
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    // 
  },
  data() {
    return {
      componentId: 1,
      currentIndex: 1,
      tabs: [
        { id: 1, title: 'Tabs 1' },
        { id: 2, title: 'Tabs 2' },
        { id: 3, title: 'Tabs 3' },
        { id: 4, title: 'Tabs 4' },
        { id: 5, title: 'Tabs 5' },
        { id: 6, title: 'Tabs 6' }
      ],
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
    tabsHandle(value) {
      this.currentIndex = value
      this.list = this.list.reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  padding: 15px;
}
.tabs-warpper {
  font-size: 0;
  border: 1px solid #eaeaea;
  .tabs-left {
    width: 100px;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    overflow: hidden;
    .tabs-title-warpper {
      height: 200px;
      overflow-x: hidden;
      width: 117px;
      font-size: 16px;
      overflow-y: auto;
      border-right: 1px solid #eaeaea;
      .tabs-title {
        text-align: center;
        padding: 10px 10px;
        &:hover {
          background-color: #f8f8f8;
          cursor: pointer;
        }
        &.tabs-title-active {
          color: #FFF;
          background-color: #52ccba;
        }
      }
    }
  }
  .tabs-right {
    width: calc(100% - 101px);
    height: 200px;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    overflow: hidden;
    .tabs-content-warpper {
      width: calc(100% + 17px);
      height: 200px;
      padding: 20px;
      overflow-x: hidden;
      overflow-y: auto;
      .tabs-content {
        font-size: 14px;
        .user-name {
          width: 100px;
          padding: 5px 10px;
          margin-bottom: 15px;
          margin-right: 15px;
          display: inline-block;
          display: block;
          text-align: center;
          color: #404040;
          border: 1px solid #eaeeae;
          &:hover {
            color: #fff;
            background-color: #52ccba;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>