// import pkg from './package'

module.exports = {
    mode: 'universal',
    // 为Nuxt.js应用程序定义.nuxt(默认)目录
    // buildDir: 'nuxt-dist',

    /*
    ** Headers of the page
    */
    head: {
        title: 'nuxt-vue-project',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'this is a nuxt-vue-project !' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#3B8070' },

    /*
    ** Global CSS
    */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        { src: '~/styles/index.scss', lang: 'scss' },
        { src: '~/styles/reset.css', lang: 'css' }
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~plugins/element-ui', ssr: true },
        { src: '~plugins/server_site/index', ssr: true },
        { src: '~plugins/svg-icon', ssr: true },
        { src: '~plugins/cookie', ssr: false },// 仅在客户端使用
        { src: '~plugins/router', ssr: false }
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],
    // vue.config属性为Vue.config提供直接配置
    vue: {
        config: {
            productionTip: true,
            devtools: false
        }
    },
    // 路由配置
    router: {
        mode: 'history'
    },
    // 设置缓存
    cache: true,
    //禁止预加载效果
    performance: {
        prefetch: false
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                // config.module.rules.push({
                //   enforce: 'pre',
                //   test: /\.(js|vue)$/,
                //   loader: 'eslint-loader',
                //   exclude: /(node_modules)/
                // })
            }
        },
        vender: ['axios'],
        loaders: [
            {
                test: /\.(png|jpeg|jpg|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'img/[name].[hash:7].[ext]'
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },

    /**
     * 非开发环境应改为false
     */
    dev: (process.env.NODE_ENV !== 'production'),

    /**
     * 客户端dev环境配置
     */
    server: {
        port: 3000,
        host: 'localhost'
    },
    proxy: [
        ['/api', { target: 'http://localhost:4000' }],
        ['/images', { target: 'http://localhost:4000' }]
    ]
}
