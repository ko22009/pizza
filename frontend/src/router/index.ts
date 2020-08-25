import Vue from 'vue'
import Router, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/components/Login.vue";
import Register from '@/components/Register.vue';
import Profile from "@/components/Profile.vue";
import PageNotFound from "@/components/PageNotFound.vue";
import store from '@/store';
import {RouterOptions} from "vue-router/types/router";

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Pizza Hot'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login page'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      title: 'Register page'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      title: 'Profile page',
      requiresAuth: true
    }
  },
  {
    path: "*",
    component: PageNotFound,
    meta: {
      title: 'Not found'
    }
  }
]

export class VueRouter extends Router {

  constructor(options?: RouterOptions) {
    super(options)
  }

  goPage(url: string, denied: boolean = false) {
    if (denied) {
      this.app.$nextTick(() => this.app.$bvToast.toast('You are not auth', {
        title: 'Redirect to auth',
        variant: 'dark',
        solid: true
      }))
    }
    if (router.currentRoute.fullPath != url) router.push(url)
  }
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  Promise.all([store.dispatch('checkAuth')]).then(() => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      console.log(store.getters.isLoggedIn)
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      router.goPage('/login', true)
    } else {
      next()
    }
  })
})

export default router
