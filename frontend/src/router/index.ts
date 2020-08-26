import Vue from 'vue'
import Router, {Route, RouteConfig} from 'vue-router'
import Home from '@/views/Home.vue'
import Login from "@/components/Login.vue";
import Register from '@/components/Register.vue';
import Profile from "@/views/Profile.vue";
import PageNotFound from "@/components/PageNotFound.vue";
import store from '@/store';
import {RouterOptions} from "vue-router/types/router";
import Shop from "@/views/Shop.vue";

const title = 'Pizza Hot'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: title
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: title + ': Login page',
      forceAfterAuth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      title: title + ': Register page',
      forceAfterAuth: true
    }
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
    meta: {
      title: title + ': Cart',
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      title: title + ': Profile page',
      requiresAuth: true
    }
  },
  {
    path: "*",
    component: PageNotFound,
    meta: {
      title: title + ': Not found'
    }
  }
]

export class VueRouter extends Router {

  constructor(options?: RouterOptions) {
    super(options)
  }

  goPage(url: string, denied: boolean = false, to: Route | null = null, from: Route | null = null, title: string = '', message: string = '') {
    if (denied) {
      this.app.$nextTick(() => this.app.$bvToast.toast(message, {
        title: title,
        variant: 'dark',
        solid: true
      }))
      store.commit('loading/setLoading', false)
    }
    router.push(url).catch(error => {
      if (error.name != "NavigationDuplicated") {
        throw error
      }
    })
  }
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function preLogin(to: Route) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    return store.getters['auth/isLoggedIn']
  }
  return true
}

function preForceAfterAuth(to: Route) {
  if (to.matched.some(record => record.meta.forceAfterAuth)) {
    return !store.getters['auth/isLoggedIn']
  }
  return true
}

function preShop(to: Route) {
  const count = store.getters['shop/count']
  return !to.matched.some(record => record.path == '/shop') || count
}

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    store.commit('loading/setLoading', false)
    document.title = to.meta.title ? to.meta.title : title
  })
})

router.beforeEach((to, from, next) => {
  store.commit('loading/setLoading', true)
  Promise.all([store.dispatch('auth/checkAuth')]).then(() => {
    if (!preLogin(to)) {
      router.goPage('/login', true, to, from, 'Redirect to auth', 'You are not auth')
    } else if (!preForceAfterAuth(to)) {
      router.goPage('/', true, to, from, 'Redirect to main page', 'You are auth')
    } else if (!preShop(to)) {
      router.goPage('/', true, to, from, 'Redirect to main page', 'You don\'t have product in cart')
    } else {
      next()
    }
  })
})

export default router
