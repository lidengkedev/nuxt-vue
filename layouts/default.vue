<template>
  <div class="layout-default">
    <div class="nuxt-warpper">
      <template v-if="is_login">
        <nuxt-link class="nuxt-link" to="/">首页</nuxt-link>
        <nuxt-link class="nuxt-link" to="/admin">用户中心</nuxt-link>
        <nuxt-link class="nuxt-link" to="/animation">动画</nuxt-link>
        <nuxt-link class="nuxt-link" to="/download/excel">下载Excel</nuxt-link>
        <nuxt-link class="nuxt-link" to="/download">文件下载</nuxt-link>
        <nuxt-link class="nuxt-link" to="/error/404">404</nuxt-link>
        <nuxt-link class="nuxt-link" to="/login">登录</nuxt-link>
        <nuxt-link class="nuxt-link" to="/tabs">Tabs</nuxt-link>
        <button class="btn logout" @click="logout">退出登录</button>
      </template>
      <button v-else class="btn login" @click="login">登录</button>
    </div>
    <nuxt />
  </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
  computed: {
    is_login() {
      return !!this.$store.state.modules.user.token
    }
  },
  methods: {
    // 登录
    login() {
      this.$router.push('/login')
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
  padding: 10px 10%;
  height: 50px;
  background-color: #35495e;
}
.nuxt-link {
    width: 100px;
    display: inline-block;
    text-align: center;
    padding: 5px 10px;
    border: 1px solid #eaeaea;
    color: #FFF;
    transition-duration: .3s;
}
.nuxt-link:hover {
    color: #FFF;
    background-color: #52ccba;
}
</style>

<style lang="scss" scoped>
  .btn {
    padding: 5px 10px;
    border-width: 0;
    color: #FFF;
    background-color: transparent;
    cursor: pointer;
  }
  .login {
    float: right;
  }
  .logout {
    float: right;
  }
</style>