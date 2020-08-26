import {Module} from 'vuex'
import {RootState} from '@/store'

export interface ShopState {
  loading: boolean,
}

export default <Module<ShopState, RootState>>{
  state: {
    loading: false,
  },
  getters: {
    loading: state => state.loading
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading
    }
  },
  actions: {},
}
