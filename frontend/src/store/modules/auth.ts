import {Module} from 'vuex'
import {RootState} from '@/store'
import api from '@/api'

export interface Auth {
  token: string | null
  status: string
}

export default <Module<Auth, RootState>>{
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
      commit('authRequest')
      return api.post('users/register', user)
        .then(resp => {
          commit('authSuccess', resp.data.token)
        })
        .catch(err => {
          commit('authError', err)
        })
    },
    login({commit}, user) {
      commit('authRequest')
      api.post('users/login', user)
        .then(resp => {
          commit('authSuccess', resp.data.token)
        })
        .catch(err => {
          commit('authError', err)
        })
    },
    logout({commit}) {
      api.get('users/logout')
        .then(({data}) => {
          commit('logout')
        })
        .catch(err => {
          commit('authError', err)
        })
    },
  }
}
