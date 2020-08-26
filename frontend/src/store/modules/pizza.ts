import {Module} from 'vuex'
import {RootState} from '@/store'
import api from '@/api'
import {Vue} from "vue-property-decorator";

export interface ItemPizza {
  id: number,
  name: string,
  description: string,
  image: string,
  price_euro: number,
  price_dollar: number,
  weight: number,
}

export interface PizzaState {
  pizza: Array<ItemPizza>
}

export default <Module<PizzaState, RootState>>{
  state: {
    pizza: []
  },
  getters: {
    pizza: state => state.pizza
  },
  mutations: {
    setPizza(state, items) {
      Vue.set(state, 'pizza', [...items]);
    }
  },
  actions: {
    async get({commit}) {
      const {data} = await api.get('pizza')
      commit('setPizza', data)
    }
  },
}
