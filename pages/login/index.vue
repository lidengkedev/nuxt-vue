<template>
  <!-- <section class="login" :class="loginbgClass"> -->
  <section class="login">
    <div class="form-warpper">
      <h2 class="title">登录</h2>
      <form @submit.prevent>
        <div class="form-item">
          <label for="" class="name">用户名：</label>
          <input v-model="username" class="form-input" focus type="text" name="" id="" placeholder="请输入用户名，如：admin">
        </div>
        <div class="form-item">
          <label for="" class="name">密码：</label>
          <input v-model="password" class="form-input" type="password" name="" autocomplete="off" id="" placeholder="请输入密码，如：123456">
        </div>
        <div class="form-item">
          <label for="" class="name">验证码：</label>
          <div class="img-code-warpper">
            <input v-model="captcha" class="form-input" type="text" name="" id="" style="width: 129px" placeholder="请输入验证码">
            <div class="img-code" v-html="imgCode" @click="getCaptcha"></div>
          </div>
        </div>
        <div class="form-item">
          <button class="btn-login" :disabled="disabled" @click="login">登录</button>
        </div>
      </form>
    </div>
    <div class="login-bg">
      <transition-group tag="div" name="login" class="login-bg-warpper">
        <template v-for="(url, index) in loginBgList">
          <img v-show="bgIndex === index"  :key="index" :src="url" width="100%" height="100%" alt="" class="login-img">
        </template>
      </transition-group>
    </div>
  </section>
</template>

<script>
import { captcha, login } from '~/api/user'
import { Message } from 'element-ui'
export default {
  head: {
    title: '登录',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', name: 'description', content: '用户登录' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  data() {
    return {
      username: '',
      password: '',
      captcha: '',
      imgCode: '',
      captcha_text: '',
      disabled: false,
      loginBgList: [require('../../assets/login/login-01.jpg'), require('../../assets/login/login-02.jpg'), require('../../assets/login/login-03.jpg')],
      bgIndex: 0,
      loginbgClass: ['bg-0']
    }
  },
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    return {
      username: '',
      password: '',
      captcha: '',
      imgCode: '',
      captcha_text: '',
      disabled: false,
      loginBgList: [require('../../assets/login/login-01.jpg'), require('../../assets/login/login-02.jpg'), require('../../assets/login/login-03.jpg')],
      bgIndex: 0,
      loginbgClass: ['bg-0']
    }
  },
  fetch() {
    
  },
  created() {
    this.getCaptcha()
    this.setLoginBg()
  },
  methods: {
    // 登录背景幻灯片
    setLoginBg() {
      setInterval(() => {
        this.bgIndex = this.bgIndex >= 2 ? 0 : (this.bgIndex + 1)
        this.loginBgPlay(this.bgIndex)
      }, 6000);
    },
    loginBgPlay(index) {
      this.loginbgClass = [`bg-${index}`]
    },
    // 获取验证码
    getCaptcha() {
      captcha().then(res => {
        if (res.status == 1) {
          this.imgCode = res.data.img
          this.captcha_text = res.data.text
        }
      })
    },
    // 登录
    login() {
      const { username, password, captcha } = this.$data
      if (username.trim() === '' || password.trim() === '') {
        Message.warning('用户名和密码不能为空')
        return false
      } else if (this.captcha.toLowerCase() === this.captcha_text.toLowerCase()) {
        this.disabled = true
        this.$store.dispatch('modules/user/login', { username, password, captcha }).then(res => {
          Message.success('登录成功')
          this.$router.push('/')
          this.disabled = false
        }).catch(err => console.log(err))
      } else {
        Message.warning('验证码不正确')
        this.getCaptcha()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-bg {
  width: 100%;
  height: 100%;
  .login-img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 1s ease-in-out;
  }
}
.login {
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);
  overflow: hidden;
  transition: all 1s ease-in-out;
  background-size: cover;
  &.bg-0 {
    background: url('../../assets/login/login-01.jpg') no-repeat center;
  }
  &.bg-1 {
    background: url('../../assets/login/login-02.jpg') no-repeat center;
  }
  &.bg-2 {
    background: url('../../assets/login/login-03.jpg') no-repeat center;
  }
}
.form-warpper {
  width: 440px;
  margin: 0 auto;
  margin-top: 30vh;
  padding: 20px;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #f8f8f8;
  .title {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
    font-size: 24px;
    color: #FFF;
  }
  .form-item {
    position: relative;
    margin-bottom: 20px;
    min-height: 48px;
    font-size: 0;
    .name {
      position: absolute;
      top: 0;
      left: 0;
      padding: 12px 0;
      font-weight: bold;
      width: 100px;
      display: inline-block;
      font-size: 14px;
      color: #FFF;
    }
    .form-input {
      margin-left: 100px;
      width: 300px;
      height: 48px;
      padding: 5px 7px;
      display: inline-block;
      border: 1px solid #eaeaea;
      border-radius: 4px;
      white-space: nowrap;
      font-size: 14px;
      color: #fff;
      background-color: transparent;
      &:hover {
        border-color: #1890ff;
      }
      &:focus {
        border-color: #1890ff;
      }
    }
    .img-code-warpper {
      margin-left: 100px;
      font-size: 0;
      .form-input {
        margin-left: 0;
        font-size: 14px;
        vertical-align: middle;
      }
      .img-code {
        display: inline-block;
        height: 48px;
        width: 150px;
        margin-left: 20px;
        border-radius: 4px;
        overflow: hidden;
        vertical-align: middle;
        cursor: pointer;
      }
    }
    svg {
      height: 100%;
      width: 100%;
    }
  }
  .btn-login {
    width: 400px;
    height: 48px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    font-size: 18px;
    color: #fff;
    background-color: transparent;
    cursor: pointer;
  }
}
.login-enter {
  opacity: 0;
}
.login-enter-active {
  opacity: 0;
}
.login-enter-to {
  opacity: 1;
}
.login-leave-active {
  opacity: 1;
}
.login-leave-to {
  opacity: 0;
}
.login-leave {
  opacity: 0;
}
</style>