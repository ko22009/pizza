import Vue from 'vue'
import Router, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/components/Login.vue";
import Register from '@/components/Register.vue';
import Profile from "@/components/Profile.vue";
import store from '@/store';
import {RouterOptions} from "vue-router/types/router";

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
]

export class VueRouter extends Router {

  constructor(options?: RouterOptions) {
    super(options)
  }

  goPage(url: string) {
    if (router.currentRoute.fullPath != url) router.push(url)
    else {
      this.app.$bvToast.toast('Toast body content', {
        title: 'Sda',
        variant: 'warning',
        solid: true
      })
    }
  }
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    router.goPage('/login')
  } else {
    next()
  }
})

export default router
