import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import { Plugin } from 'vue-fragment'
Vue.use(Plugin)

import './sass/app.scss'
import api from "@/api";

Vue.config.productionTip = false

const root = new Vue({
  router,
  store,
  render: h => h(App)
})

if (process.env.NODE_ENV === 'development') {
  Object.assign(root, {
    $api: api,
  })
  Object.assign(window, {root})
}

root.$mount('#app')
