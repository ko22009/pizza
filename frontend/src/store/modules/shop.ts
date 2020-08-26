import {Module} from 'vuex'
import {RootState} from '@/store'
import {Vue} from "vue-property-decorator";

export const euro = '€'
export const dollar = '$'

interface order {
  id: number,
  count: number
}

export interface ShopState {
  order: Array<order>,
  currency: string
}

export default <Module<ShopState, RootState>>{
  state: {
    order: [],
    currency: euro
  },
  getters: {
    order: state => state.order,
    count: state => state.order
      .reduce(
        (a: order, b: order) => ({count: a.count + b.count} as order),
        {count: 0} as order
      ).count,
    currency: state => state.currency
  },
  mutations: {
    add(state, {id, count}) {
      const index = state.order.findIndex(item => item.id == id)
      if(index == -1) {
        state.order.push({
          id: id,
          count: count
        })
      } else {
        Vue.set(state.order[index], 'count', state.order[index].count + count)
      }
    },
    remove(id) {

    },
    clear(state) {
      Vue.set(state, 'order', []);
    },
    changeCurrency(state) {
      state.currency = state.currency === euro ? dollar : euro
    }
  },
  actions: {},
}
