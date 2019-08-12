import { getToken } from '../plugins/cookie'
// import { getToken } from '../pages/logreg/api/cookie'
// import VueCookie from '../pages/logreg/api/cookie'
// console.log(VueCookie)
// console.log(VueCookie.getToken())
console.log(getToken())
const whiteList = ['/', '/login']
export default ({ app, store }) => {
    app.router.beforeEach((to, from, next) => {
        console.log({to, from, next})
        const isClient = process.client
        if (isClient) {
            // const hasToken = getToken()
            const hasToken = false
            if (hasToken) {
                try {
                    next('/')
                } catch(e) {
                    next({ path: '/login'})
                }
            } else {
                console.log(to.path)
                if (whiteList.indexOf(to.path) !== -1) {
                    next()
                } else {
                    next({ path: '/login'})
                }
            }
        }
    })
}
