<template>
  <div>
    <div class="d-flex align-items-center mb-2">
      <span class="h2 text-danger mr-2">Your history of orders</span>
    </div>
    <div v-if="!orders.length">
      <span class="h3 text-dark mr-2">History is empty</span>
    </div>
    <div class="orders">
      <div v-for="(order, i) in orders">
        <div class="h3 border-top pt-2 header">
          <span>Order: </span>
          <span>#{{i+1}}</span>
        </div>
        <div class="h5 font-weight-light">
          <span>Address: </span>
          <span>{{order.address}}</span>
        </div>
        <div class="h5 font-weight-light">
          <span>Email: </span>
          <span>{{order.email}}</span>
        </div>
        <div class="h5 font-weight-light">
          <span>Name: </span>
          <span>{{order.name}}</span>
        </div>
        <div class="h5 font-weight-light">
          <span>Phone: </span>
          <span>{{order.phone}}</span>
        </div>
        <b-row class="justify-content-start">
          <pizza-cart
            :hide="true"
            :item="getItem(item.pivot)"
            :key="item.id"
            v-for="item in order.pizzas"
          />
        </b-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import PizzaCart from '@/components/PizzaCart.vue'

  @Component({
    components: {
      PizzaCart,
    },
  })
  export default class Profile extends Vue {

    get orders() {
      return this.$store.getters['auth/orders']
    }

    get pizza() {
      return this.$store.getters['pizza/pizza']
    }

    getItem(item: any) {
      return {
        id: item.pizza_id,
        count: item.count,
      }
    }

    loadPizza() {
      this.$store.dispatch('pizza/get')
    }

    mounted() {
      if (!this.pizza.length) this.loadPizza()
      this.$store.dispatch('auth/orders')
    }
  }

</script>

<style scoped>
  .orders div:first-child .header {
    border-top: none !important;
    padding-top: 0 !important;
  }
</style>
