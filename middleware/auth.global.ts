import { getToken, setToken } from "~/utils/auth"

export default defineNuxtRouteMiddleware((to, from) => {
  // let token: any = to.query.token || ''
  // if (token) setToken(token)
  // if (getToken()) {
  //   if (to.path === '/login') {
  //     return navigateTo(`/?t=${token}`)
  //   }
  //   return navigateTo(to.fullPath)
  // } else if (to.path !== '/login') {
  //   return navigateTo('/login')
  // }
  // return navigateTo(to.path)
})