<template>
  <!-- <section class="login" :class="loginbgClass"> -->
  <section class="login">
    <div class="form-warpper">
      <!-- <h2 class="title">登录</h2> -->
      <svg class="title" width="100%" height="100">
        <text text-anchor="middle" x="50%" y="50%" class="text text-1">登录</text>
        <text text-anchor="middle" x="50%" y="50%" class="text text-2">登录</text>
        <text text-anchor="middle" x="50%" y="50%" class="text text-3">登录</text>
        <text text-anchor="middle" x="50%" y="50%" class="text text-4">登录</text>
      </svg>
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
          <img v-show="bgIndex === index" :src="url" width="100%" height="100%" alt="" class="login-img">
        </template>
      </transition-group>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

let username: string | any = ref()
let password: string | any = ref()
let captcha: string | any = ref()
let imgCode: Element | any = ref({})
let disabled: boolean | any = ref()
let loginBgList = [
  '/img/login/login-01.jpg',
  '/img/login/login-02.jpg',
  '/img/login/login-03.jpg'
]
let bgIndex: number = 0
const getCaptcha = async () => {
  const { data } = await fetch('/api/captcha').then(res => res.json())
  imgCode.value = data.img
}
onMounted(() => {
  getCaptcha()
})
const login = () => {
  router.push({ path: '/', query: { token: 'TOKENKEY' } })
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
  height: calc(100vh - 60px);
  overflow: hidden;
  transition: all 1s ease-in-out;
  background-size: cover;
  &.bg-0 {
    background: url('/img/login/login-01.jpg') no-repeat center;
  }
  &.bg-1 {
    background: url('/img/login/login-02.jpg') no-repeat center;
  }
  &.bg-2 {
    background: url('/img/login/login-03.jpg') no-repeat center;
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
<style lang="scss" scoped>
.text {
  font-size: 64px;
  font-weight: bold;
  text-transform: uppercase;
  fill: none;
  stroke-width: 2px;
  stroke-dasharray: 90 310;
  animation: stroke 6s infinite linear;
}
.text-1 {
  stroke: #3498db;
  text-shadow: 0 0 5px #3498db;
  animation-delay: -1.5s;
}
.text-2 {
  stroke: #f39c12;
  text-shadow: 0 0 5px #f39c12;
  animation-delay: -3s;
}
.text-3 {
  stroke: #e74c3c;
  text-shadow: 0 0 5px #e74c3c;
  animation-delay: -4.5s;
}
.text-4 {
  stroke: #9b59b6;
  text-shadow: 0 0 5px #9b59b6;
  animation-delay: -6s;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}
</style>