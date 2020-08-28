import {Module} from 'vuex'
import {RootState} from '@/store'
import api from '@/api'
import {Vue} from 'vue-property-decorator'

export interface Auth {
  token: string | null
  status: string,
  orders: []
}

export default <Module<Auth, RootState>>{
  state: {
    token: localStorage.getItem('token'),
    status: '',
    orders: [],
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    orders: state => state.orders,
  },
  mutations: {
    setOrders(state, payload) {
      Vue.set(state, 'orders', payload)
    },
    authRequest(state) {
      state.status = 'loading'
    },
    authSuccess(state, payload) {
      state.status = 'success'
      state.token = payload
      api.setHeader(payload)
    },
    authError(state) {
      state.status = 'error'
      state.token = ''
    },
    logout(state) {
      state.status = ''
      state.token = ''
      api.setHeader('')
    },
  },
  actions: {
    orders({commit}) {
      return new Promise((resolve, reject) => {
        api.get('order/get')
          .then(resp => {
            commit('setOrders', resp.data)
            resolve(resp)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    register({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('authRequest')
        api.post('users/register', user)
          .then(resp => {
            commit('authSuccess', resp.data.token)
            resolve()
          })
          .catch(err => {
            commit('authError', err)
            reject(err)
          })
      })
    },
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('authRequest')
        api.post('users/login', user)
          .then(resp => {
            commit('authSuccess', resp.data.token)
            resolve()
          })
          .catch(err => {
            commit('authError', err)
            reject(err)
          })
      })
    },
    logout({commit}) {
      return new Promise((resolve, reject) => {
        api.get('users/logout')
          .then(({data}) => {
            commit('logout')
            resolve()
          })
          .catch(err => {
            commit('authError', err)
            reject(err)
          })
      })
    },
  },
}
