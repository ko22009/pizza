import Vue from 'vue'
import Vuex, {Store} from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export interface RootState {
  token: string
  status: string
  user: object
}

export default new Store<RootState>({
  state: {
    token: '',
    status: '',
    user: {}
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {
    authRequest(state) {
      state.status = 'loading'
    },
    authSuccess(state, payload) {
      state.status = 'success'
      state.token = payload.token
      state.user = payload.user
    },
    authError(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    register({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        api.post('register', user)
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            api.setToken(token)
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            api.removeToken()
            reject(err)
          })
      })
    },
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        api.post('login', user)
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            api.setToken(token)
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            api.removeToken()
            reject(err)
          })
      })
    },
    logout({commit}) {
      return new Promise((resolve, reject) => {
        commit('logout')
        api.removeToken()
        resolve()
      })
    }
  },
  modules: {}
})
