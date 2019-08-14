<template>
  <div class="layout-default">
    <div class="nuxt-warpper">
      <template v-if="is_login">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">

          <el-menu-item index="home">
            <nuxt-link class="nuxt-link" to="/">首页</nuxt-link>
          </el-menu-item>


          <el-menu-item index="download">
            <nuxt-link class="nuxt-link" to="/download">文件下载</nuxt-link>
          </el-menu-item>

          <el-menu-item index="animation">
            <nuxt-link class="nuxt-link" to="/animation">动画</nuxt-link>
          </el-menu-item>

          <el-submenu index="user">
            <template slot="title">用户管理</template>
            <el-menu-item index="user-admin"><nuxt-link class="nuxt-link" to="/admin">用户中心</nuxt-link></el-menu-item>
            <el-menu-item index="user-2">选项2</el-menu-item>
            <el-menu-item index="user-3">选项3</el-menu-item>
            <el-submenu index="user-4">
              <template slot="title">选项4</template>
              <el-menu-item index="user-4-1">选项1</el-menu-item>
              <el-menu-item index="user-4-2">选项2</el-menu-item>
              <el-menu-item index="user-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          
          <el-submenu index="error">
            <template slot="title">错误信息</template>
            <el-menu-item index="error-401">
              <nuxt-link class="nuxt-link" to="/error/401">401</nuxt-link>
            </el-menu-item>
            <el-menu-item index="error-404">
              <nuxt-link class="nuxt-link" to="/error/404">404</nuxt-link>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="other">
            <template slot="title">其他</template>
            <el-menu-item index="other-tabs">
              <nuxt-link class="nuxt-link" to="/tabs">Tabs</nuxt-link>
            </el-menu-item>
          </el-submenu>

        </el-menu>
        <button class="btn logout" @click="logout">退出</button>
      </template>
      <template v-else>
        <div class="el-menu-demo"></div>
        <button class="btn login"><nuxt-link class="nuxt-link" to="/login">登录</nuxt-link></button>
      </template>
    </div>
    <nuxt />
  </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
  data() {
    return {
      activeIndex: 'home'
    }
  },
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    return {
      activeIndex: 'home'
    }
  },
  computed: {
    is_login() {
      return !!this.$store.state.modules.user.token
    }
  },
  mounted() {
    this.getMenuActive()
  },
  methods: {
    getMenuActive() {
      const menus = [
        { name: 'home', routes: ['', '/'] },
        { name: 'user', routes: ['/admin'] },
        { name: 'download', routes: ['/download'] },
        { name: 'animation', routes: ['/animation'] },
        { name: 'error', routes: ['/error', '/error/404', '/error/401'] },
        { name: 'other', routes: ['/tabs'] }
      ]
      const path = this.$route.path
      console.log(path)
      for (let i = 0, len = menus.length; i < len; i++) {
        const { name, routes } = menus[i]
        if (routes.indexOf(path) > -1) {
          this.activeIndex = name
        }
      }
    },
    // 菜单选择
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    // 退出登录
    logout() {
      this.$store.dispatch('modules/user/logout').then(() => {
        Message.success('用户已退出登录')
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
/* 菜单按钮组 */
.nuxt-warpper {
  display: flex;
  background-color: rgb(84, 92, 100);
}
.el-menu-demo {
  width: 100%;
  padding: 0 10%;
  height: 60px;
  background-color: rgb(84, 92, 100);
}
.nuxt-link {
  width: 100%;
  height: 100%;
  color: #FFF;
  display: inline-block;
  transition-duration: .3s;
}
</style>

<style lang="scss" scoped>
  .btn {
    float: right;
    width: 60px;
    padding: 5px 10px;
    border-width: 0;
    color: #FFF;
    text-align: center;
    background-color: transparent;
    cursor: pointer;
    clear: both;
    &:hover {
      background-color: #000;
    }
  }
</style>