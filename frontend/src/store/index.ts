import Vue from 'vue'
import Vuex, {Store} from 'vuex'
import {modules} from "@/store/modules";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export interface RootState {
}

const store = new Store<RootState>({
  modules,
  plugins: [
    createPersistedState({
      paths: [
        'shop'
      ]
    })
  ]
})

export default store
