import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _a25445b4 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _3d1ed75e = () => interopDefault(import('..\\pages\\animation\\index.vue' /* webpackChunkName: "pages_animation_index" */))
const _1d558668 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _8413433e = () => interopDefault(import('..\\pages\\tabs\\index.vue' /* webpackChunkName: "pages_tabs_index" */))
const _fe4c2808 = () => interopDefault(import('..\\pages\\download\\excel.vue' /* webpackChunkName: "pages_download_excel" */))
const _7527ea1a = () => interopDefault(import('..\\pages\\error\\404.vue' /* webpackChunkName: "pages_error_404" */))
const _40745842 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _a25445b4,
      name: "admin"
    }, {
      path: "/animation",
      component: _3d1ed75e,
      name: "animation"
    }, {
      path: "/login",
      component: _1d558668,
      name: "login"
    }, {
      path: "/tabs",
      component: _8413433e,
      name: "tabs"
    }, {
      path: "/download/excel",
      component: _fe4c2808,
      name: "download-excel"
    }, {
      path: "/error/404",
      component: _7527ea1a,
      name: "error-404"
    }, {
      path: "/",
      component: _40745842,
      name: "index"
    }],

    fallback: false
  })
}
