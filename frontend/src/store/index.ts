import Vue from 'vue'
import Vuex, {Store} from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export interface RootState {
  token: string | null
  status: string
}

export default new Store<RootState>({
  state: {
    token: localStorage.getItem('token'),
    status: '',
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },
  mutations: {
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
    register({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('authRequest')
        api.post('users/register', user)
          .then(resp => {
            const token = resp.data.token
            commit('authSuccess', token)
            resolve(resp)
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
            const token = resp.data.token
            commit('authSuccess', token)
            resolve(resp)
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
            resolve(data)
          })
          .catch(err => {
            commit('authError', err)
            reject(err)
          })
      })
    },
    checkAuth({commit}) {
      if (localStorage.getItem('token')) {
        return new Promise((resolve) => {
          api.get('token/validate')
            .then(resp => {
              resolve(resp)
            })
            .catch(err => {
              commit('logout')
              resolve(err)
            })
        })
      }
    },
  },
  modules: {}
})
