<template>
    <section class="login">
        <div class="form-warpper">
            <h2 class="title">登录</h2>
            <div class="form-item">
                <label for="" class="name">用户名：</label>
                <input v-model="username" class="form-input" type="text" name="" id="" placeholder="请输入用户名，如：admin">
            </div>
            <div class="form-item">
                <label for="" class="name">密码：</label>
                <input v-model="password" class="form-input" type="password" name="" id="" placeholder="请输入密码，如：123456">
            </div>
            <div class="form-item">
                <label for="" class="name">验证码：</label>
                <div class="img-code-warpper">
                    <input v-model="captcha" class="form-input" type="text" name="" id="" style="width: 129px" placeholder="请输入验证码">
                    <div class="img-code" v-html="imgCode" @click="getCaptcha"></div>
                </div>
            </div>
            <div class="form-item">
                <button class="login" @click="login">登录</button>
            </div>
        </div>
    </section>
</template>

<script>
import { Captcha, Login } from '~/api/common'
export default {
    head: {
        title: '登录',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', name: 'description', content: '登录' }
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
            captcha_text: ''
        }
    },
    created() {
        this.getCaptcha()
    },
    methods: {
        getCaptcha() {
            Captcha().then(res => {
                if (res.status == 1) {
                    this.imgCode = res.data.img
                    this.captcha_text = res.data.text
                }
            })
        },
        // 登录
        login() {
            if (this.captcha.toLowerCase() === this.captcha_text.toLowerCase()) {
                Login({
                    username: this.username,
                    password: this.password,
                    captcha: this.captcha
                }).then(res => {
                    window.sessionStorage.setItem('token', res.data.token)
                    this.$router.push('/')
                }).catch(err => console.log(err))
            } else {
                alert('验证码不正确')
                this.getCaptcha()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #3a8ee6;
}
.form-warpper {
    width: 440px;
    margin: 0 auto;
    margin-top: 30vh;
    padding: 20px;
    background-color: rgba(58,142,230,0.3);
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(8, 108, 212, 0.72);
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
            // color: #fff;
            background-color: rgba(255,255,255,0.7);
            &:hover {
                border-color: #52ccba;
            }
            &:focus {
                border-color: #52ccba;
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
    .login {
        width: 400px;
        height: 48px;
        border: 1px solid #52ccba;
        border-radius: 4px;
        font-size: 18px;
        color: #fff;
        background-color: rgba(58,142,230,0.3);
        cursor: pointer;
    }
}
</style>