import { getToken } from '../plugins/cookie'

const whiteList = ['/', '/login']
export default ({ app, store }) => {
    app.router.beforeEach((to, from, next) => {
        console.log(`from: ${from.path} ==> to: ${to.path}`)
        const isClient = process.client
        if (isClient) {
            const hasToken = getToken()
            if (hasToken) {
                store.dispatch('modules/user/setToken', hasToken)
                if (to.path === '/login') {
                    next({ path: '/' })
                } else {
                    try {
                        next()
                    } catch(e) {
                        next({ path: '/login'})
                    }
                }
            } else {
                if (whiteList.indexOf(to.path) !== -1) {
                    next()
                } else {
                    next({ path: '/login'})
                }
            }
        }
    })
}
