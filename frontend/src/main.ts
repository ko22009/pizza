import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import { Plugin } from 'vue-fragment'
Vue.use(Plugin)

import './sass/app.scss'

Vue.config.productionTip = false

const root = new Vue({
  router,
  store,
  render: h => h(App)
})

if (process.env.NODE_ENV === 'development')
  Object.assign(window, {root})

root.$mount('#app')

export default root
