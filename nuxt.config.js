import pkg from './package'

export default {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

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
        { src: '~plugins/server_site/index', ssr: true }
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],

    // 路由配置
    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                path: '/',
                name: 'Home',
                component: resolve(__dirname, 'pages/index.vue'),
                children: [
                    {
                        path: 'download/excel',
                        name: 'DownLoadExcel',
                        component: resolve(__dirname, 'pages/download/excel.vue')
                    },
                    {
                        path: '404',
                        name: '404',
                        component: resolve(__dirname, 'pages/error/404.vue')
                    }, {
                        path: '*',
                        redirect: '404'
                    }
                ]
            })
        }
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {}
    },

    /**
     * 非开发环境应改为false
     */
    dev: true,

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
