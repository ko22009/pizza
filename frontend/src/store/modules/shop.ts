import {Module} from 'vuex'
import {RootState} from '@/store'
import {Vue} from 'vue-property-decorator'
import api from '@/api'

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
    add(state, payload) {
      const index = state.order.findIndex(item => item.id == payload.id)
      if (index == -1) {
        state.order.push({
          id: payload.id,
          count: payload.count,
        })
      } else {
        Vue.set(state.order[index], 'count', state.order[index].count + payload.count)
      }
    },
    updateCount(state, {id, count}) {
      const index = state.order.findIndex(item => item.id == id)
      if (index != -1) {
        Vue.set(state.order[index], 'count', count)
      }
    },
    remove(state, id) {
      Vue.set(state, 'order', state.order.filter(item => item.id != id))
    },
    clear(state) {
      Vue.set(state, 'order', [])
    },
    changeCurrency(state) {
      state.currency = state.currency === euro ? dollar : euro
    },
  },
  actions: {
    make({commit}, order) {
      return new Promise((resolve, reject) => {
        api.post('order/make', order)
          .then(resp => {
            resolve(resp)
            commit('clear')
          })
          .catch(err => {
            reject(err)
          })
      })
    },
  },
}
