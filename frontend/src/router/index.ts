import Vue from 'vue'
import Router, {RouteConfig} from 'vue-router'
import Home from '@/views/Home.vue'
import Login from "@/views/Login.vue"
import Register from '@/views/Register.vue'
import Profile from "@/views/Profile.vue"
import PageNotFound from "@/views/PageNotFound.vue"
import store from '@/store'
import Shop from "@/views/Shop.vue"
import AfterAuthHandler from "@/router/handlers/afterAuthHandler"
import BeforeAuthHandler from "@/router/handlers/beforeAuthHandler"
import EndHandler from "@/router/handlers/endHandler"
import BeforeShopHandler from "@/router/handlers/beforeShopHandler"

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

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  router.app.$nextTick(() => {
    store.commit('loading/setLoading', false)
    document.title = to.meta.title ? to.meta.title : title
  })
})

function toaster(url: string, message: string, title: string) {
  router.app.$nextTick(() => router.app.$bvToast.toast(message, {
    title: title,
    variant: 'dark',
    solid: true
  }))
  router.push(url).catch()
}

router.beforeEach((to, from, next) => {
  store.commit('loading/setLoading', true)
  const beforeAuthHandler = new BeforeAuthHandler(() => toaster('/login', 'Redirect to auth', 'You are not auth'))
  const afterAuthHandler = new AfterAuthHandler(() => toaster('/', 'Redirect to main page', 'You are auth'))
  const beforeShopHandler = new BeforeShopHandler(() => toaster('/', 'Redirect to main page', 'You don\'t have product in cart'))
  const endHandler = new EndHandler(next)

  beforeAuthHandler.setNext(afterAuthHandler)
  afterAuthHandler.setNext(beforeShopHandler)
  beforeShopHandler.setNext(endHandler)

  beforeAuthHandler.next(to)
})

export default router
