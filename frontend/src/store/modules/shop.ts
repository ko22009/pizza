import {Module} from 'vuex'
import {RootState} from '@/store'
import {Vue} from "vue-property-decorator";

export const euro = '€'
export const dollar = '$'

export interface Order {
  id: number,
  count: number
}

export interface ShopState {
  order: Array<Order>,
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
        (a: Order, b: Order) => ({count: a.count + b.count} as Order),
        {count: 0} as Order
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
    remove(state, id) {
      Vue.set(state, 'order', state.order.filter(item => item.id != id))
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
